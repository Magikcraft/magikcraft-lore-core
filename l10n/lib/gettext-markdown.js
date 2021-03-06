'use strict';

const fs = require('fs');
const gettextParser = require('gettext-parser');
const marked = require('marked');
const util = require('util');
const path = require('path');
const _ = require('underscore');
const co = require('co');

exports.md2pot = md2pot;

function md2pot(files, options) {
  let translations = {'': {'': {msgid: '', comments: {flag: 'fuzzy'}}}};
  let lexerOptions = options && options.lexerOptions instanceof Object ? options.lexerOptions : {};

  if (!(files instanceof Array)) {
    files = [files];
  }
  // XXX: no msgctxt support so far
  files.forEach(function(fn) {
    let text = fs.readFileSync(fn, 'utf-8');
    let tokens = lexer(text.toString(), lexerOptions);
    for (let i in tokens) {
      let obj = tokens[i];
      // correct the lex data containing html tags
      if (obj.type === 'paragraph' && !obj.pre) {
        obj.text = obj.text.replace(/\n+$/, '');
      }
      if (obj.text) {
        if (translations[''][obj.text] == undefined) {
          let msg = {msgctxt: '', msgstr: '', msgid: obj.text, comments: {reference: fn + ':' + i}};
          if (obj.type == 'code') {
            msg.msgstr = msg.msgid;
          }
          translations[''][obj.text] = msg;
        } else {
          let msg = translations[''][obj.text];
          if (msg.comments.reference.length > 0)
            msg.comments.reference += '\n';
          msg.comments.reference += fn + ':' + i;
        }
      }
    }
  });

  let data = {charset: 'utf-8',
              headers: {
                'project-id-version': 'PACKAGE VERSION',
                'language-team': 'LANGUAGE <LL@li.org>',
                'po-revision-date': 'YEAR-MO-DA HO:MI+ZONE',
                'language': '',
                'mime-version': '1.0',
                'content-type': 'text/plain; charset=UTF-8',
                'content-transfer-encoding': '8bit',
                'pot-creation-date': new Date().toISOString().replace('T', ' ').replace(/:\d{2}.\d{3}Z/, '+0000'),
                'plural-forms': ''
              },
              translations: translations
             };

  return gettextParser.po.compile(data);
};

class mdGenerator {

  constructor(tokens, options) {
    this.options = options ? options : {};
    this.list_depth = 0;
    this.tokens = tokens.reverse();
    this.token = null;
    this.list_ordered = false;
    this.renderer = new mdRenderer();
  }

  next() {
    return this.token = this.tokens.pop();
  }

  parse() {
    let result = [];
    let loose = false;
    let token;
    let obj, item;

    while (this.next()) {
      if (this.options.debug)
        console.log('cur[' + this.token.type + ']');
      switch(this.token.type) {
      case 'list_start':
        token = this.token;
        this.list_depth++;
        this.list_ordered = token.ordered;
        obj = this.parse();
        this.list_depth--;
        this.list_ordered = token.ordered;
        result.push({type: "list", ordered: token.ordered, depth: this.list_depth, items: obj});
        if (this.options.debug)
          console.log('(list: ordered: ' + token.ordered + ', depth: ' + this.list_depth + ', items: ' +  util.inspect(obj, {depth: null}) + ')');
        break;
      case 'list_end':
        return result;
      case 'list_item_start':
        token = this.token;
        this.next();
        if (this.token.type !== 'text') {
          throw new Error('Unexpected token: [expected: text, actual: ' + this.token.type + ']');
        }
        item = {type: 'list_item', text: (this.list_ordered ? '1. ' :  '- ') + this.token.text, loose: false};
        obj = this.parse();
        if (this.options.debug)
          console.log(obj);
        if (obj.length === 0 || obj[0].type !== 'list') {
          item.child = obj;
          result.push(item);
        } else {
          item.child = [];
          result.push(item);
          Array.prototype.push.apply(result, obj);
        }
        break;
      case 'loose_item_start':
        token = this.token;
        this.next();
        if (this.token.type !== 'text') {
          throw new Error('Unexpected token: [expected: text, actual: ' + this.token.type + ']');
        }
        item = {type: 'list_item', text: (this.list_ordered ? '1. ' :  '- ') + this.token.text, loose: true};
        obj = this.parse();
        item.child = obj;
        result.push(item);
        break;
      case 'list_item_end':
        return result;
      case 'text':
        result.push(this.token);
        break;
      case 'space':
        result.push({type: 'space'});
        break;
      case 'heading':
        result.push(this.token);
        break;
      case 'code':
        result.push(this.token);
        break;
      case 'paragraph':
        result.push(this.token);
        break;
      case 'table':
        result.push(this.token);
        break;
      }
    }
    return result;
  }

  render(objs) {
    let out = this.renderer.render(this.parse(objs));
    if (this.options.debug)
      console.log(out);
    return out.join('\n');
  }
}

class mdRenderer {

  constructor(options) {
    this.options = options ? options : {};
  }

  render(objs) {
    let obj;
    let result = [];
    let out = '';
    let o;

    if (this.options.debug)
      console.log(util.inspect(objs,{depth: null}));
    while (obj = objs.shift()) {
      if (this.options.debug)
        console.log('cur:' + obj.type);
      switch (obj.type) {
      case 'list':
        o = this.render(obj.items);
        if (this.options.debug)
          console.log('items: ' + o);
        for (let i in o) {
          o[i] = (o[i].length > 0 ? ' '.repeat(obj.depth * 2) + o[i] : o[i]);
        }
        Array.prototype.push.apply(result, o);
        break;
      case 'list_item':
        result.push(obj.text);
        o = this.render(obj.child);
        for (let i in o) {
          o[i] = (o[i].length > 0 ? '  ' + o[i] : o[i]);
        }
        Array.prototype.push.apply(result, o);
        if (obj.loose && result[result.length-1] !== '')
          result.push('');
        break;
      case 'space':
        result.push('');
        break;
      case 'text':
        result.push(obj.text);
        break;
      case 'code':
        if ('lang' in obj) {
          result.push('```' + (obj.lang ? obj.lang : ''));
          Array.prototype.push.apply(result, obj.text.split('\n'));
          result.push('```');
        } else {
          Array.prototype.push.apply(result, ('\t' + obj.text.split('\n').join('\n\t')).split('\n'));
        }
        break;
      case 'paragraph':
        if (result[result.length-1] !== '')
          result.push('');
        result.push(obj.text);
        result.push('');
        break;
      case 'heading':
        if (result[result.length-1] !== '')
          result.push('');
        result.push('#'.repeat(obj.depth) + ' ' + obj.text);
        result.push('');
        break;
      case 'table':
        let maxlen = 3;
        obj.header = obj.header ? obj.header : [];
        obj.cells = obj.cells ? obj.cells : [];
        obj.align = obj.align ? obj.align : [];
        for (let i in obj.header) {
          maxlen = obj.header[i].length > maxlen ? obj.header[i].length : maxlen;
        }
        for (let i in obj.cells) {
          for (let j in obj.cells[i]) {
            maxlen = obj.cells[i][j].length > maxlen ? obj.cells[i][j].length : maxlen;
          }
        }
        for (let i in obj.header) {
          obj.header[i] = obj.header[i] + ' '.repeat(maxlen - obj.header[i].length);
        }
        if (obj.header.length > 0) {
          result.push('| ' + obj.header.join(' | ') + ' |');
          let align = [];
          for (let i in obj.align) {
            switch (obj.align[i]) {
            case 'center':
              align.push(':' + '-'.repeat(maxlen - 2) + ':');
              break;
            case 'right':
              align.push('-'.repeat(maxlen - 1) + ':');
              break;
            case 'left':
              align.push(':' + '-'.repeat(maxlen - 1));
              break;
            default:
              align.push('-'.repeat(maxlen));
              break;
            }
          }
          if (align.length > 0)
            result.push('|' + align.join('|') + '|');
        }
        for (let i in obj.cells) {
          let cell = obj.cells[i];
          for (let j in cell) {
            cell[j] = cell[j] + ' '.repeat(maxlen - cell[j].length);
          }
          result.push('|' + cell.join('|') + '|');
        }
        break;
      }
    }

    return result;
  }
}

exports.mdRenderer = mdRenderer;

function lexer(string, options) {
  options = options ? options : {};
  options.sanitize = true;
  options.sanitizer = ((text) => text);
  options.escape = ((text) => text);
  options.unescape = ((text) => text);
  let o = _.defaults(options, marked.defaults);
  let tokens = marked.lexer(string, o);
  for (let i in tokens) {
    let token = tokens[i];
    if (token.type === 'paragraph') {
      if (!('pre' in token)) {
        // Set the default value to not make too much difference in validate
        token.pre = false;
      }
      if (!token.pre) {
        if (token.text) {
          token.text = token.text.replace(/\n+$/, '');
        }
      }
    }
  }
  return tokens;
};

exports.lexer = lexer;

function escape(text) {
  return text
    .replace(/&(?!#?\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

exports.po2md = po2md;

function po2md(file, potext, opts) {
  return co(function* () {
    let options = opts ? opts : {};
    let lexerOptions = options && options.lexerOptions instanceof Object ? options.lexerOptions : {};
    let data = gettextParser.po.parse(potext);
    let tokens = {};
    let lang;
    let f;

    if (data && data.headers && data.headers.language) {
      lang = data.headers.language;
    } else if ((f = path.basename(file).match(/^([a-zA-Z]{2,3}(?:_[a-zA-Z]{2,3})?)\.po$/))) {
      lang = f[1];
    } else if (path.basename(file).match(/\.pot$/)) {
      lang = 'en';
    } else {
      return Promise.reject(new Error('Unable to guess the target language'));
    }
    for (let i in data.translations['']) {
      let msg = data.translations[''][i];

      if ((msg.comments.flag == undefined || !msg.comments.flag.match(/fuzzy/)) && msg.comments.reference) {
        let refs = msg.comments.reference.split('\n');
        for (let j in refs) {
          let x = refs[j].split(':');
          let fn = x[0];
          let _path = x[1];
          if (options.srcdir) {
            fn = path.join(options.srcdir, path.basename(fn));
          }
          if (tokens[fn] === undefined) {
            let text = fs.readFileSync(fn, 'utf-8');
            tokens[fn] = lexer(text.toString(), lexerOptions);
          }
          if (msg.msgstr[0]) {
            let token = tokens[fn];
            if (token[_path].text &&
                (token[_path].text === msg.msgid) || escape(token[_path].text) === escape(msg.msgid)) {
              token[_path].text = msg.msgstr[0];
            }
          }
        }
      }
    }
    let ret = [];
    for (let i in tokens) {
      let gen = new mdGenerator(_.clone(tokens[i]), options.markdown);
      let result = gen.render(tokens[i]);
      ret.push(yield Promise.resolve({fn: i, po: file, lang: lang, data: result}));
    }
    return ret;
  });
};

exports.validate = function(file) {
  let pot = md2pot(file);
  return po2md(path.basename(file, '.md') + '.pot', pot, {srcdir: path.dirname(file)})
    .then((r) => {
      let _path = r[0].fn;
      let lang = r[0].lang;
      let data = r[0].data;
      let potctxt = fs.readFileSync(file, 'utf-8');
      let pottokens = lexer(potctxt.toString());
      let potokens = lexer(data.toString());

      if (_.isEqual(potokens, pottokens)) {
        return Promise.resolve(true);
      } else {
        return Promise.reject(new Error('Unable to process the markdown `' + file + '`. please check with `gettext-md.js -v` for more details'));
      }
    });
}