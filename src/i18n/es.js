export default {
  meta: {
    title: 'Arturo Corpas | Automatización y Datos',
    description: 'Portafolio de Arturo Fernando Corpas Ulloa: analista de datos, automatización de procesos y desarrollo de software.',
  },
  skip: 'Saltar al contenido',
  newTab: 'se abre en una pestaña nueva',
  langSwitch: 'Cambiar idioma a inglés',
  nav: { label: 'Principal', about: 'Sobre mí', services: 'Servicios', skills: 'Habilidades', experience: 'Experiencia', education: 'Formación', route: 'Ruta', projects: 'Proyectos', contact: 'Contacto' },
  hero: {
    photoAlt: 'Retrato de Arturo Corpas',
    role: 'Analista de Datos & Automatización de Procesos | Desarrollador de Software',
    summary: 'Automatizo procesos y convierto datos en información útil para decidir. Construyo herramientas en Python, aplicaciones web y análisis de datos que reducen el trabajo manual repetitivo.',
    projects: 'Ver proyectos', cv: 'Descargar CV (PDF)', whatsapp: 'Escríbeme por WhatsApp',
  },
  stats: [{ value: 30, suffix: '+', label: 'herramientas de automatización' }, { value: 9, suffix: '+', label: 'años en procesos administrativos y de auditoría' }, { value: 40, suffix: '+', label: 'repositorios en GitHub' }],
  services: {
    title: 'Qué puedo aportar a tu equipo',
    items: [
      { icon: '⚙️', title: 'Automatización de procesos', text: 'Scripts y herramientas en Python que reemplazan tareas manuales: validación de archivos, conciliaciones, correo y extracción de documentos.' },
      { icon: '📊', title: 'Análisis de datos y reportes', text: 'Limpieza, cruce y visualización de datos con Pandas, Power BI y Excel avanzado para la toma de decisiones.' },
      { icon: '💻', title: 'Desarrollo de herramientas y web', text: 'Aplicaciones internas y sitios responsivos con React, Node.js y APIs REST, pensados primero para móvil.' },
    ],
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy **desarrollador de software y analista de datos**. Creo soluciones que combinan **aplicaciones web, automatización de procesos, análisis de datos e inteligencia artificial**, y parto siempre de una necesidad de negocio concreta.',
      'Antes de programar pasé más de 9 años en facturación y auditoría en el sector salud, y esa es mi mayor ventaja: conozco el proceso desde adentro. Hoy mantengo más de 30 herramientas en Python que validan, concilian y corrigen información de facturación electrónica, y reducen tiempos y errores operativos.',
      'En web conecto interfaces con APIs y bases de datos usando React, Node.js y PHP/Laravel. En automatización trabajo con Python y N8N, y tengo **conocimientos de RPA por estudio propio**. Uso la **inteligencia artificial** para automatizar tareas y analizar información. Estoy en una **ruta de aprendizaje continuo**: avanzo en la ruta de AWS (ya cuento con Cloud Foundations y Generative AI Foundations) y sigo ampliando mi perfil con Automation Anywhere y Power Automate. Me gusta acompañar la solución completa, desde entender el problema hasta mantenerla, y construir tecnología que **aporte valor y tenga impacto real**.',
    ],
  },
  skills: { title: 'Habilidades', learning: 'Estoy ampliando mi perfil hacia plataformas de automatización inteligente y nube.' },
  experience: { title: 'Experiencia' },
  education: { title: 'Formación y certificaciones', degrees: 'Formación académica', certs: 'Certificaciones y cursos' },

  certificates: {
    title: 'Certificaciones', hint: 'Toca un certificado para verlo completo.', viewer: 'Certificados',
    view: (title) => `Ver certificado: ${title}`,
    hours: (h) => `${String(h).replace('.', ',')} h`,
    groups: { ai: 'IA y automatización', cloud: 'Nube', data: 'Datos', dev: 'Desarrollo' },
    other: 'Otros cursos',
  },
  route: {
    title: 'Ruta de aprendizaje continuo',
    intro: 'Sigo fortaleciendo mi perfil con formación constante en nube, inteligencia artificial y automatización. Este es el camino recorrido y lo que viene.',
    listLabel: 'Línea de tiempo de aprendizaje',
    status: { done: 'Completado', active: 'En curso', next: 'Siguiente' },
  },
  projects: {
    title: 'Proyectos', all: 'Todos', automation: 'Automatización', web: 'Web', code: 'Código', frontend: 'Frontend', backend: 'Backend',
    private: 'Código privado por manejar información sensible.', open: 'Ver imágenes',
    filterLabel: 'Filtrar proyectos por categoría',
    results: (n) => `${n} ${n === 1 ? 'proyecto mostrado' : 'proyectos mostrados'}`,
    practice: 'Prácticas y ejercicios',
    practiceText: 'Ejercicios con los que afiancé la lógica en JavaScript y el maquetado con CSS.',
  },
  showcase: { title: 'Diseño responsivo: mobile-first', text: 'Mer.Store se diseñó primero para celular y se adapta a tablet y computador. Toca una imagen para ampliarla.', mobile: 'Móvil', tablet: 'Tablet', desktop: 'PC' },
  contact: { title: 'Contacto', text: '¿Tienes un proceso que automatizar o datos por analizar? Escríbeme y conversamos.', whatsapp: 'WhatsApp', msg: 'Hola Arturo, vi tu portafolio y me gustaría conversar contigo.' },
  lightbox: { prev: 'Imagen anterior', next: 'Imagen siguiente', counter: (i, n) => `Imagen ${i} de ${n}` },
  footer: 'Hecho con React', close: 'Cerrar', menu: 'Menú',
};