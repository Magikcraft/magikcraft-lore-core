# The Core Lore for the Magikcraft API

## Localisation Pipeline

To update the translations for the scrolls, run `gulp update-translations`.

This will extract all strings, obtain machine translations from Google for missing translations, and build localised versions in `scrolls`. Existing modified translations are preserved.

To update the translations for the lore code, run `gulp gtx:locale-update`.

To convert translations for the lore, run `gulp gtx:locale-build`.