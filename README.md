# Cervezas del Fin del Mundo

Landing responsive de la distribuidora chilena, adaptada del PDF «Cervezas Fin del Mundo · Web editable». HTML, CSS y JavaScript sin dependencias ni compilación. Imágenes y logotipo extraídos del documento, servidos localmente.

## Desarrollo

Desde `/workspace/findelmundo`, con Python 3 instalado:

```sh
npm run dev
```

También puede ejecutarse `python3 -m http.server 3000 --bind 0.0.0.0`. El directorio puede publicarse en un alojamiento estático.

## Catálogo y pendientes

Incluye las cuatro referencias detalladas en el PDF: Chiflón del Diablo, Pereza, Tres Pascualas y Gula. Aunque el diseño anuncia 25 cervezas, las otras 21 no están documentadas. El contador indica las fichas realmente mostradas. No se inventaron descripciones, datos de contacto ni parámetros técnicos ausentes. Las imágenes de envase se presentan como pendientes según la referencia.

Los datos se mantienen en `script.js`. Filtros por marca, búsqueda sin distinción de acentos, fichas modales y menú móvil implementados. Las fichas y denominaciones están sujetas a validación comercial.

Validación realizada en Chromium: filtros, búsqueda, estado sin resultados, apertura de ficha, cierre con Escape, menú móvil, imágenes y ausencia de desbordamiento horizontal a 390, 768 y 1280 píxeles.
