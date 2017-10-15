# The Core Lore for the Magikcraft API


## Localisation Pipeline

1. To generate `.pot` (po template) files, run `gulp update-pot`.

This converts the English markdown files into `.pot` files in the `scrolls/pot` directory.

2. Now update the language po-files.

2. To perform automated translation (this will overwrite any existing translations at this stage), run `gulp google-translate-all`.

This outputs machine translations from Google Cloud into the `scrolls/po/${lang}` directory.

3. To merge these machine translations and build a new set of scrolls for a language, run `gulp build-da` or `gulp build-jp`.

This merges the machine translations into markdown files and places them in the `scrolls` directory.

Note that there is no facility for respecting existing translations at this point in time.

`gulp generate-po-files`