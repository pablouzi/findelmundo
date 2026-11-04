# Cervezas del Fin del Mundo

Landing responsive de la distribuidora chilena, adaptada del PDF «Cervezas Fin del Mundo · Web editable». HTML, CSS y JavaScript sin dependencias ni compilación. Imágenes y logotipo extraídos del documento, servidos localmente.

## Desarrollo

Desde `/workspace/findelmundo`, con Python 3 instalado:

```sh
npm run dev
```

También puede ejecutarse `python3 -m http.server 3000 --bind 0.0.0.0`. El directorio puede publicarse en un alojamiento estático.

## Catálogo y pendientes

Incluye 23 referencias: 11 de Indomable y 12 de Crápula, transcritas del portafolio DOCX de Indomable (versión de trabajo) y la presentación PDF de Crápula de agosto de 2026. El total anterior de 25 se sustituyó por el número documentado. Tres Pascualas no aparece en el portafolio actual y no se incluye.

Los datos se mantienen en `beers.js`: estilo, alcohol e IBU, descripción, maridaje, datos sensoriales y reconocimientos cuando están informados en las fichas. Carmela y Callejones no tienen IBU informado. Las dos denominaciones especiales de Indomable son provisionales según el documento de trabajo. No se infiere disponibilidad comercial a partir de la inclusión en el catálogo. Las fotografías de estos portafolios no se extrajeron ni se incorporaron: se conservan los espacios de imagen pendiente.

`script.js` implementa filtros por marca, búsqueda sin distinción de acentos, fichas modales y menú móvil. El contacto de la distribuidora continúa pendiente; el contacto de una cervecería no se reutiliza como contacto de distribución.

Validación realizada en Chromium: filtros, búsqueda, estado sin resultados, apertura de ficha, cierre con Escape, menú móvil, imágenes y ausencia de desbordamiento horizontal a 390, 768 y 1280 píxeles.

## Tipografía

Tinos es la tipografía principal, con pesos 400 y 700 en normal y cursiva, alojada en `assets/fonts/` para evitar dependencias externas al cargar. Arial se mantiene para navegación y etiquetas auxiliares. La licencia se incluye en `assets/fonts/OFL.txt`.
