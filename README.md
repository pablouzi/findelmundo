# Cervezas del Fin del Mundo

Landing responsive de la distribuidora chilena, adaptada del PDF «Cervezas Fin del Mundo · Web editable». HTML, CSS y JavaScript sin dependencias ni compilación. Imágenes y logotipo extraídos del documento, servidos localmente.

## Desarrollo

Desde `/workspace/findelmundo`, con Python 3 instalado:

```sh
npm run dev
```

También puede ejecutarse `python3 -m http.server 3000 --bind 0.0.0.0`. El directorio puede publicarse en un alojamiento estático.

## Catálogo y pendientes

Incluye la selección confirmada por el usuario: 12 referencias de Indomable y 10 de Crápula (22 en total). Las dos menciones de Tres Pascualas se interpretan como una sola West Coast IPA. Se agregaron Tres Pascualas y Berry Red Ale (sabor calafate); se retiraron Callejones, Melendez y Dark Lager con Avellanas de esta selección. Los datos técnicos existentes provienen del portafolio DOCX de Indomable y del PDF de Crápula de agosto de 2026.

Los datos se mantienen en `beers.js`: estilo, alcohol e IBU, descripción, maridaje, datos sensoriales y reconocimientos cuando están informados en las fichas. Carmela no tiene IBU informado. Tres Pascualas y Berry Red Ale tienen descripción, alcohol e IBU pendientes; no se infieren esos valores. Las dos denominaciones especiales de Indomable son provisionales según el documento de trabajo. No se infiere disponibilidad comercial a partir de la inclusión en el catálogo. Se incorporaron 22 imágenes de los ZIP proporcionados por el usuario, conservando los formatos WebP/PNG/JPEG y todos los datos del catálogo. Las imágenes se optimizaron a un máximo de 1920 × 1080 px en horizontal o 1080 × 1920 px en vertical, manteniendo proporciones, transparencia y sin ampliar originales pequeños. Las versiones originales permanecen en el historial de Git. Los encuadres de los mockups se ajustan solo mediante CSS. El catálogo completo tiene imagen de producto, incluyendo Don Francisco y San Sebastián - Belgian Tripel. Por indicación expresa del usuario, el archivo MOCHA ULMO se asocia a Mocha Dick - Canelo Austral, manteniendo los datos actuales. Se añadió la fotografía de San Sebastián Ulmo y se retiró el aviso de validación comercial al pie de las fichas. Algunas etiquetas difieren de las fichas técnicas; por indicación del usuario se conservan los datos actuales.

`script.js` implementa filtros por marca, búsqueda sin distinción de acentos, fichas modales y menú móvil. El contacto comercial identifica cada marca con los correos entregados por el usuario: Mmonsal@crapula.cl y Diego@indomable.cl. Los enlaces `mailto:` abren el cliente de correo del visitante. No se agregaron redes sociales ni WhatsApp.

Validación realizada en Chromium: filtros, búsqueda, estado sin resultados, apertura de ficha, cierre con Escape, menú móvil, imágenes y ausencia de desbordamiento horizontal a 390, 768 y 1280 píxeles.

## Tipografía

Tinos es la tipografía principal, con pesos 400 y 700 en normal y cursiva, alojada en `assets/fonts/` para evitar dependencias externas al cargar. Arial se mantiene para navegación y etiquetas auxiliares. La licencia se incluye en `assets/fonts/OFL.txt`.
