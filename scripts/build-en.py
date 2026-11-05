"""Generate the static English page from shared Spanish markup and English copy.
Run from any directory. Optionally set SITE_URL to the deployed site's full base URL.
"""
from pathlib import Path
import json, os, re
from urllib.parse import urljoin
root = Path(__file__).resolve().parent.parent
source = (root / 'index.html').read_text()
translations = json.loads((root / 'locales/en-page.json').read_text())
for text in translations:
    if text not in source:
        raise ValueError(f'Translation source changed: {text}')
# A single pass prevents translations from modifying one another.
pattern = re.compile('|'.join(re.escape(text) for text in sorted(translations, key=len, reverse=True)))
english = pattern.sub(lambda match: translations[match.group()], source)
english = english.replace('hreflang="es" aria-current="page"', 'hreflang="es"').replace('hreflang="en">EN', 'hreflang="en" aria-current="page">EN')
english = english.replace('<script src="locales/i18n.js">', '<script src="locales/en-beers.js"></script><script src="locales/i18n.js">')
def relative(match):
    attr, value = match.groups()
    if value.startswith(('#', 'mailto:', 'http:', 'https:', '//')):
        return match.group()
    return f'{attr}="../{value}"'
english = re.sub(r'(src|href)="([^"]+)"', relative, english)
site_url = os.environ.get('SITE_URL')
if site_url:
    base = site_url.rstrip('/') + '/'
    def alternate(match):
        lang = match.group(1)
        return f'<link rel="alternate" hreflang="{lang}" href="{urljoin(base, "en/" if lang == "en" else "")}">'
    source = re.sub(r'<link rel="alternate" hreflang="([^"]+)" href="[^"]+">', alternate, source)
    english = re.sub(r'<link rel="alternate" hreflang="([^"]+)" href="[^"]+">', alternate, english)
    (root / 'index.html').write_text(source)
(root / 'en').mkdir(exist_ok=True)
(root / 'en/index.html').write_text(english)

# Package only the public site for Cloudflare static assets.
import shutil
output = root / 'dist'
if output.exists():
    shutil.rmtree(output)
output.mkdir()
for filename in ['index.html', 'styles.css', 'script.js', 'beers.js']:
    shutil.copy2(root / filename, output / filename)
for directory in ['assets', 'en']:
    shutil.copytree(root / directory, output / directory)
(output / 'locales').mkdir()
for filename in ['i18n.js', 'en-beers.js']:
    shutil.copy2(root / 'locales' / filename, output / 'locales' / filename)
