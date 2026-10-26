# Portafolio de Arturo Corpas (React + Vite)

## Estructura
```
src/
  components/   piezas reutilizables (Header, ProjectCard, Lightbox, ExternalLink, RichText...)
  sections/     una sección por archivo (Hero, Stats, About, Services, Skills, Projects, Showcase...)
  data/         contenido editable: perfil, habilidades, experiencia, formación, proyectos
  hooks/        useReveal (animación al hacer scroll) y useCountUp (contadores)
  i18n/         textos es/en y selector de idioma (Context)
  styles/       variables, estilos globales y de componentes (mobile-first)
public/         foto.jpg, CV_Arturo_Corpas.pdf, favicon.svg, og-image.jpg e img/ (capturas y diagramas)
```

## Qué editar
- WhatsApp, correo, GitHub y LinkedIn: `src/data/profile.js`
- Habilidades (incluye el grupo "En aprendizaje"): `src/data/skills.js`
- Textos y traducciones (incluido "Sobre mí"): `src/i18n/es.js` y `en.js`. En los párrafos, `**texto**` se muestra en negrita.
- Proyectos: `src/data/projects.js`
  - `image`: miniatura dentro de `public/img/`. Usa formato **16:9** (por ejemplo 1280×720) para que no se recorte. `null` muestra un icono.
  - `gallery`: imágenes que abre el visor al hacer clic (opcional; si falta se usa `image`).
  - `practice: true`: el proyecto aparece en la lista compacta "Prácticas y ejercicios" y no en la cuadrícula principal.
  - `tags`: texto simple o `{ es, en }` para traducirlos.

## Probar en tu equipo
```
npm install
npm run dev
```

## Compilar y publicar
```
npm run build
```
Se genera la carpeta `dist/`, que puedes subir a cualquier hosting estático (Netlify, GitHub Pages, Vercel, etc.). Como `base` es `./`, funciona en la raíz del dominio o dentro de una subcarpeta.

### Vista previa al compartir el enlace
Para que WhatsApp, LinkedIn y otras apps muestren la imagen `og-image.jpg`, copia `.env.example` como `.env` y escribe en `SITE_URL` la dirección pública de tu sitio antes de compilar. Si no lo haces, el sitio funciona igual, pero la vista previa puede no mostrar la imagen.

## Accesibilidad
- Enlace "Saltar al contenido", navegación por teclado y foco visible.
- Visor de imágenes con foco controlado, cierre con Esc y flechas para navegar.
- Idioma, título y descripción de la página cambian junto con el selector ES/EN.
- Se respeta "reducir movimiento" del sistema operativo.

## Certificaciones y ruta de aprendizaje
- Certificados: `src/data/certifications.js` (imagen en `public/img/certs/`). No subas constancias con número de cédula o datos personales sensibles.
- Ruta de aprendizaje: `src/data/route.js` (status: done | active | next).
