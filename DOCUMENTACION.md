# Diccionario emocional del cuerpo — Documentación de traspaso

> Todo lo necesario para retomar el proyecto sin haber estado en las conversaciones anteriores.
> Última actualización: 2026-11-23 · Estado del contenido: 2026-11-07.

## 1. Qué es

Un diccionario web, en español, de dolencias y malestares del cuerpo leídos en clave emocional y espiritual. Para cada una explica **qué emoción puede estar asociada**, **qué podría estar reprimido** y **qué puede estar pasando en la vida de la persona**, y cierra con **tres preguntas para reflexionar**.

**Objetivo (en palabras de Fede):** ayudar a las personas a encontrar un significado espiritual y emocional de sus aflicciones o dolores.

Requisitos que se pidieron desde el inicio:

- Subirlo a un repositorio de GitHub y acceder desde GitHub Pages (sitio 100 % estático).
- Un **índice** con todas las dolencias.
- Un **buscador**.
- Información basada en fuentes.
- Que se vea bien en **mobile**.
- Una lista **cada vez más grande**, con dolencias comunes o con algún respaldo.

## 2. Estado actual

| | |
|---|---|
| Entradas | **175** en 13 categorías (lista completa en `INDICE-ENTRADAS.md`) |
| Fuentes enlazadas en el sitio | **25** |
| Archivos de datos | `data.js` + `data-extra-1.js` … `data-extra-6.js` |
| Mobile | Probado en Chrome a 390 px: sin scroll horizontal, panel de índice, buscador fijo |
| Publicado | **Todavía no** (el zip está listo; falta subirlo al repo) |
| SEO | **Sin hacer** (ver sección 10: es la mejora de mayor impacto pendiente) |

Entradas por categoría: Digestivo 23 · Músculos y huesos 22 · Garganta y respiración 16 · Cabeza y sistema nervioso 15 · Piel 15 · Corazón y circulación 13 · Sistema hormonal y metabólico 13 · Emociones y estados del ánimo 12 · Urinario y ginecológico 12 · Infancia 9 · Ojos y oídos 9 · Sexualidad y ciclo 9 · Inmunidad y sistemas complejos 7.

## 3. Estructura de archivos

```
diccionario-emocional/
├── index.html            Página única: cabecera, buscador, índice, fichas, fuentes
├── style.css             Estilos (claro/oscuro automático, mobile primero)
├── app.js                Lógica: búsqueda, índice, rutas por hash, panel mobile
├── data.js               Datos base: AVISO_SERIO, ENTRIES (50 primeras), FUENTES
├── data-extra-1…6.js     Tandas de entradas (ENTRIES.push) y fuentes (FUENTES.push)
├── INDICE-ENTRADAS.md    Lista de todas las entradas por categoría (GENERADO, no editar)
├── DOCUMENTACION.md      Este archivo
├── README.md             Guía corta de publicación
└── tools/
    ├── validar-datos.js      Valida datos y regenera INDICE-ENTRADAS.md
    └── probar-navegador.py   Prueba de humo en navegador (mobile + escritorio)
```

Las carpetas `tools/` y los `.md` no hacen falta para que el sitio funcione. Se pueden subir al repo (son inofensivos) o dejarlos fuera.

## 4. Cómo funciona

- **Sin build ni dependencias.** Son scripts clásicos que comparten el ámbito global. Eso permite abrir `index.html` con doble clic (`file://`) y que funcione, cosa que no pasaría con `fetch()` de un JSON.
- **El orden de los `<script>` importa:** `data.js` primero (define `ENTRIES`, `FUENTES` y la constante `AVISO_SERIO`), luego los `data-extra-N.js`, y `app.js` al final.
- **`app.js`** hace lo siguiente al cargar:
  1. A cada entrada le calcula un `id` con `slug(nombre)` (sin tildes, minúsculas, guiones) y un texto de búsqueda normalizado.
  2. Ordena las entradas alfabéticamente (`localeCompare` en español).
  3. Dibuja el índice agrupado por categoría y los chips de zona de la pantalla de bienvenida.
  4. Enruta por **hash**: `#ansiedad` abre esa ficha; sin hash muestra la bienvenida; `#fuentes` salta a las fuentes.
- **Buscador:** ignora tildes y mayúsculas; todas las palabras deben aparecer (AND) en nombre, categoría, palabras clave, emoción, reprimido o vida. Ordena por puntaje: coincidencia en el nombre pesa más que en palabras clave. Resalta los términos con `<mark>`.
- **Mobile (≤ 860 px):** barra fija arriba con buscador y botón «Índice»; el índice se abre como panel a pantalla completa (con fondo oscuro y botón de cerrar) y se cierra solo al elegir una dolencia; el aviso médico arranca plegado; botones de al menos 44 px; respeta las zonas seguras del iPhone.
- **Tipografía:** Fraunces (títulos) e Inter (texto) desde Google Fonts. Si no cargan, el sitio cae a Georgia y la fuente del sistema, sin romperse.

## 5. Formato de una entrada

```js
{
  n: "Gastritis",                       // nombre visible (su slug es la URL: #gastritis). Debe ser ÚNICO.
  c: "Digestivo",                       // categoría: reutilizar una existente
  k: "estómago gastritis ardor",        // palabras clave y sinónimos para el buscador
  e: "Lo que no se puede «digerir».",   // emoción asociada
  r: "Enojo tragado, ...",              // qué podría estar reprimido
  v: "Conflictos laborales, ...",       // qué puede estar pasando en la vida
  q: ["¿...?", "¿...?", "¿...?"],       // 3 preguntas para reflexionar
  a: "Texto de aviso"                   // OPCIONAL: aviso médico (se muestra en recuadro «Ojo»)
}
```

**Importante:** si se cambia el nombre `n` de una entrada, cambia su enlace. Con el sitio publicado eso rompe los enlaces compartidos.

La constante `AVISO_SERIO` (en `data.js`) es un texto reutilizable para condiciones médicas serias. Se usa como `a: AVISO_SERIO` o concatenada: `a: AVISO_SERIO + " Texto extra."`.

## 6. Criterios editoriales (a mantener en las entradas nuevas)

El tono y el cuidado son parte del producto. Estos son los criterios con los que se escribieron las 175 entradas; en una revisión futura conviene comprobar que todas los cumplan (en especial el punto 4).

1. **Lenguaje de posibilidad, no de sentencia.** «Podría», «quizás», «algunas lecturas hablan de…». Nunca «esta enfermedad *es causada por*…».
2. **Nada de culpa.** Ninguna ficha debe insinuar que la persona «se buscó» su dolencia. En algunas de las más delicadas (cáncer, infertilidad, depresión posparto) se dice de forma explícita; en otras (endometriosis, estrés postraumático) se aclara la falta de causa emocional o que no hay que atravesarlo solo/a.
3. **Honestidad sobre la evidencia.** Cuando una condición tiene causa claramente física (autoinmunes, gota, celiaquía, anemia, tartamudeo, miomas, tiroides…), la entrada lo dice: «No hay evidencia de que una emoción la cause». Lo que sí se afirma, con fuentes, es que el estrés y las emociones **influyen** en síntomas, brotes o riesgo (por ejemplo, riesgo cardiovascular y ánimo).
4. **Aviso médico (`a`) en toda condición que pueda necesitar atención médica.** No todas las entradas lo tienen hoy (por ejemplo, varias dolencias leves o comunes quedaron sin aviso); es el punto a revisar primero. Obligatorio cuando es una enfermedad diagnosticada (diabetes, tiroides, asma, hipertensión…), cuando el síntoma puede ser una urgencia (dolor de pecho, desmayo, falta de aire, fiebre) o cuando es un tema de salud mental con riesgo (depresión, posparto, trauma). En niños siempre: «consultá al pediatra» y «no es culpa de nadie». Las entradas con aviso quedan marcadas con ⚠ en `INDICE-ENTRADAS.md`.
5. **Tres preguntas abiertas**, que inviten a mirarse sin juzgar. Sin consignas del tipo «tenés que…».
6. **Voz:** castellano rioplatense neutro-cálido, con voseo en los avisos y las preguntas («consultá», «¿qué necesito?»).
7. **Categorías:** reutilizar las 13 existentes. Cada categoría nueva agrega un chip a la pantalla de inicio.

## 7. Cómo agregar una tanda nueva (paso a paso)

1. Crear `data-extra-7.js` (el siguiente número libre) con este esqueleto:
   ```js
   ENTRIES.push(
     { n: "...", c: "...", k: "...", e: "...", r: "...", v: "...", q: ["...", "...", "..."] },
     // ...
   );
   FUENTES.push(
     { t: "Título", u: "https://...", d: "Qué respalda" }   // solo si hay fuentes nuevas
   );
   ```
2. Agregar en `index.html`, **antes** de `app.js`:
   `<script src="data-extra-7.js"></script>`
3. Validar y regenerar el índice (evita nombres duplicados y archivos sin enlazar):
   ```bash
   node tools/validar-datos.js --indice
   ```
4. Probar en el navegador (opcional pero recomendado):
   ```bash
   pip install playwright && playwright install chromium   # una sola vez
   python tools/probar-navegador.py
   ```
5. Actualizar la tabla de estado (sección 2) y el historial (sección 11), y subir al repo.

Antes de escribir una tanda, mirar `INDICE-ENTRADAS.md` para no repetir y para ver qué categorías están flacas.

## 8. Publicar en GitHub Pages

1. Crear un repositorio (por ejemplo `diccionario-emocional`) y subir **todo el contenido de la carpeta** a la raíz, con `index.html` en la raíz.
2. En el repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch** → rama `main`, carpeta `/ (root)` → **Save**.
3. En ~1 minuto queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/` (para el usuario `fpradomacat`: `https://fpradomacat.github.io/diccionario-emocional/`).
4. Probar en el celular real, en modo claro y oscuro.

Las rutas de los archivos son relativas, así que funciona tanto en la raíz del dominio como en un subdirectorio.

## 9. Fuentes: qué hay y qué límites tienen

La lista visible en el sitio vive en el arreglo `FUENTES`. Se arma con tres tipos de material:

| Tipo | Ejemplos | Para qué sirve |
|---|---|---|
| Investigación sobre cómo emoción y cuerpo se relacionan | Revisiones de medicina psicosomática (PMC, The Lancet 2024), alexitimia y dolor crónico, estrés e inmunidad, eje intestino-cerebro, ira/depresión y riesgo cardiovascular, Takotsubo, soledad y mortalidad | Respaldan los **vínculos reales** (el estrés agrava, influye, aumenta riesgo) |
| Diccionarios de la tradición | Diccionario BioEmocional (Vilanova), iProfesional, Euroinnova, MDZ | Origen de las **lecturas simbólicas**. Son referencia de la tradición, **no** evidencia científica |
| Críticas y límites | Sección de críticas de Wikipedia sobre medicina psicosomática | Respaldan el aviso de que **no está demostrado** que cada enfermedad tenga una causa emocional única |

⚠ **Pendiente de verificar (honestidad importante):** las fuentes se seleccionaron a partir de **resultados de búsqueda** (títulos, resúmenes y enlaces). No se leyó cada artículo completo ni se comprobó uno por uno que el texto respalde exactamente lo que dice la ficha. Antes de publicar de forma amplia conviene:

- Abrir cada enlace y confirmar que carga y que dice lo que la descripción afirma.
- Reemplazar los que son páginas intermedias o espejos por la versión original (PubMed, PMC o la revista). Por ejemplo, los registros de bibliotecas universitarias y los PDF alojados en sitios de terceros.
- Para colesterol no se encontró una fuente seria (solo blogs y notas de prensa), así que no se citó nada y la ficha redacta con cautela.

## 10. Decisiones tomadas y por qué

| Decisión | Motivo |
|---|---|
| Sitio estático, sin framework ni build | Pedido original: subir a GitHub y servir con Pages. Cualquiera lo edita con un editor de texto. |
| Datos en `.js` con variables globales (no JSON) | Funciona abriendo el archivo directo, sin servidor local. |
| Contenido en varios `data-extra-N.js` | Cada tanda es un archivo chico, fácil de revisar y de revertir. |
| Avisos médicos visibles arriba y en fichas | El tema es salud: evitar que alguien reemplace atención médica por esta lectura. |
| Aviso arriba plegado en mobile | Que no tape el contenido, pero que siga a un toque de distancia. |
| Índice como panel completo en mobile | Con 175 entradas, una lista incrustada en la página era inmanejable en pantalla chica. |
| Lecturas de las «enfermedades graves» con foco en acompañar | En cáncer, autoinmunes, infertilidad, etc., se evita la culpa y se habla de lo que el diagnóstico remueve, no de la causa. |

## 11. Historial

| Versión | Fecha | Cambios |
|---|---|---|
| v1 | 2026-11-07 | 50 entradas, índice, buscador, 10 fuentes, estructura base |
| v2 | 2026-11-07 | 104 entradas (+54), rediseño mobile (panel de índice, buscador fijo, chips por zona), 16 fuentes |
| v3 | 2026-11-07 | 148 entradas (+44): trauma, ansiedad social, Crohn, SOP, endometriosis, infancia, etc.; 21 fuentes |
| v4 | 2026-11-07 | 175 entradas (+27): garganta/respiración, corazón (colesterol, infarto, Takotsubo), metabólico (gota, hígado graso…), condiciones comunes; 25 fuentes |
| doc | 2026-11-23 | Esta documentación, `INDICE-ENTRADAS.md` y los scripts de `tools/` |

## 12. Pendientes y mejoras posibles (por orden de impacto)

### A. SEO (la mejora más importante)

**Problema de fondo:** hoy el sitio es una sola página que dibuja las fichas con JavaScript y navega con `#hash`. Para Google es **una única URL**: nadie puede encontrar «significado emocional de la gastritis», porque esa página no existe como tal.

Plan acordado (sin implementar):

1. **Una página HTML real por dolencia** (`/gastritis/`, `/ansiedad/`…), generada por un script de build a partir de los mismos archivos de datos. Sigue sin necesitar servidor: es HTML estático para GitHub Pages. El buscador y el índice seguirían igual.
2. **Título y meta descripción únicos** con las frases que la gente escribe: «Gastritis: significado emocional y qué puede estar reprimido».
3. **Técnico básico:** `sitemap.xml`, `robots.txt`, canonical en cada página, Open Graph e imagen para compartir, página 404, páginas por categoría.
4. **Enlazado interno** (dolencias relacionadas y categoría).
5. **Contenido más profundo** (hoy las fichas son cortas; en temas de salud Google exige más): bloque «Qué dice la evidencia», «Cuándo consultar a un médico», fuentes enlazadas y nota de autoría.
6. **Datos estructurados JSON-LD** de tipo `Article`/`WebPage`. **No** usar esquemas médicos (`MedicalCondition`) porque sugieren contenido clínico; no apostar a resultados enriquecidos de preguntas frecuentes (Google los limitó a sitios de salud oficiales).
7. **Dominio y autoridad:** un subdominio de un sitio propio hereda más autoridad que `usuario.github.io/repo`. Un video del canal de YouTube por dolencia, enlazado a su ficha, es la forma más natural de conseguir enlaces.
8. **Medición:** Google Search Console y Bing Webmaster Tools, envío del sitemap, revisión mensual.

**Decisión que falta para empezar:** la **URL final** donde se publicará (define canonicals y sitemap). Aviso realista: en salud posicionar es difícil, los resultados tardan semanas o meses y no hay garantía.

### B. Contenido

- **Inmunidad y sistemas complejos** es la categoría más corta (7). Candidatas: lupus, síndrome de fatiga crónica, sensibilidad química múltiple, entre otras (con el mismo cuidado: «no hay evidencia de causa emocional»).
- Más **síntomas cotidianos** (picazón por zona, sensación de ahogo, hormigueos por zona).
- Más entradas en **Infancia** (9) y **Ojos y oídos** (9).
- **Verificar enlaces y respaldo de cada fuente** (ver sección 9).
- Idealmente, que **una persona del ámbito de la salud (psicólogo/a o médico/a)** revise los avisos y los textos de las condiciones más sensibles antes de difundirlo.

### C. Producto (ideas, no pedidas)

- Botón «compartir ficha» y «copiar enlace».
- Fichas «relacionadas» al pie.
- Modo impresión / guardar como PDF.
- PWA (instalable y funciona sin conexión).
- Versión en otros idiomas (la estructura de datos lo permite).

## 13. Problemas conocidos

- **Fuentes de Google:** en el entorno donde se probó no cargaron (sin internet externo), por eso la tipografía final no se vio. En un navegador normal deberían cargar; si no, el sitio usa fuentes del sistema.
- **Enlaces con `#hash` no se indexan** por buscadores (ver 12.A).
- **Renombrar una entrada rompe su enlace** (el `id` sale del nombre).
- Si se agrega un `data-extra-N.js` y se olvida el `<script>` en `index.html`, las entradas no aparecen. `tools/validar-datos.js` lo detecta.

## 14. Cómo retomarlo con Claude

Pegá algo así al empezar una conversación nueva (adjuntando el zip o indicando la carpeta del repo):

> Retomemos el *Diccionario emocional del cuerpo*. Leé `DOCUMENTACION.md` y `INDICE-ENTRADAS.md` de la carpeta del proyecto. Quiero: **[agregar otra tanda de entradas / implementar el plan de SEO / revisar las fuentes / …]**.

Con eso Claude tiene el contexto, los criterios editoriales y la forma de validar el trabajo.
