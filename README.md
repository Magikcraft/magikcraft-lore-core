# The Core Lore for the Magikcraft API


## Localisation Pipeline

1. To generate `.pot` (po template) files, run `node ./l10n/generate-pot.js`.

This converts the English markdown files into `.pot` files in the `pot` directory.

2. To perform automated translation (this will overwrite any existing translations at this stage), run `gulp translate-da` or `gulp translate-jp`.

This outputs machine translations from Google Cloud into the `po/${lang}` directory.

3. To merge these machine translations and build a new set of scrolls for a language, run `gulp build-da` or `gulp build-jp`.

This merges the machine translations into markdown files and places them in the `scrolls` directory.

Note that there is no facility for respecting existing translations at this point in time.

`gulp generate-po-files`