# Diccionario emocional del cuerpo

Sitio estático (HTML + CSS + JS, sin dependencias ni build) con índice, buscador y una ficha por dolencia.

## Publicar en GitHub Pages

1. Creá un repositorio nuevo y subí estos archivos a la raíz (`index.html`, `style.css`, `app.js`, `data.js`, `data-extra-1.js`, `data-extra-2.js`, `data-extra-3.js`, `data-extra-4.js`, `data-extra-5.js`, `data-extra-6.js`).
2. En el repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Elegí la rama `main` y la carpeta `/ (root)` → **Save**.
4. En un minuto estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Agregar o editar dolencias

Todo el contenido está en `data.js` y `data-extra-*.js` (arreglo `ENTRIES`). Para sumar una nueva tanda, creá `data-extra-7.js` con `ENTRIES.push({...})` y agregalo en `index.html` antes de `app.js`. Cada entrada:

```js
{
  n: "Nombre",
  c: "Categoría",
  k: "palabras clave para el buscador",
  e: "Emoción asociada.",
  r: "Qué podría estar reprimido.",
  v: "Qué puede estar pasando en la vida de la persona.",
  q: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
  a: "Aviso opcional (condiciones médicas serias)."
}
```

El índice, las categorías y el buscador se actualizan solos.

## Nota sobre el contenido

Los textos son originales y presentan lecturas simbólicas, no evidencia médica. El sitio incluye avisos visibles y una sección de fuentes y límites.
