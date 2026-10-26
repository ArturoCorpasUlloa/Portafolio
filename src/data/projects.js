const gh = 'https://github.com/ArturoCorpasUlloa';

// category: 'automation' | 'web'   ·   image: miniatura 16:9 dentro de public/img (null = icono)
// gallery: imágenes que abre el visor (opcional)   ·   practice: true = va a la lista "Prácticas"
// tags: texto o { es, en }
export const projects = [
  {
    id: 'suite-facturacion', category: 'automation', image: 'flow-suite.svg', isPrivate: true,
    title: { es: 'Suite de automatización de facturación', en: 'Billing automation suite' },
    description: { es: 'Más de 30 herramientas en Python: validadores y correctores masivos de XML/JSON, apps de escritorio con interfaz gráfica y procesamiento en hilos.', en: '30+ Python tools: bulk XML/JSON validators and fixers, desktop GUI apps and threaded processing.' },
    tags: ['Python', 'Tkinter', 'XML/JSON', 'Pandas'], links: [],
  },
  {
    id: 'conciliador', category: 'automation', image: 'flow-conciliador.svg', isPrivate: true,
    title: { es: 'Conciliador JSON–Excel', en: 'JSON–Excel reconciler' },
    description: { es: 'Cruza facturas en JSON contra Excel por servicio, detecta diferencias y exporta el reporte final.', en: 'Matches JSON invoices against Excel by service, detects differences and exports the final report.' },
    tags: ['Python', 'ttkbootstrap', 'Pandas', 'OpenPyXL'], links: [],
  },
  {
    id: 'tarifarios', category: 'automation', image: 'flow-tarifarios.svg', isPrivate: true,
    title: { es: 'Validador de tarifarios', en: 'Tariff validator' },
    description: { es: 'Aplicación Streamlit que normaliza nombres de servicios con coincidencia aproximada y genera un Excel multihoja de discrepancias.', en: 'Streamlit app that normalizes service names with fuzzy matching and generates a multi-sheet discrepancy Excel file.' },
    tags: ['Python', 'Streamlit', 'thefuzz', 'Excel'], links: [],
  },
  {
    id: 'correo', category: 'automation', image: 'flow-correo.svg', isPrivate: true,
    title: { es: 'Automatización de correo', en: 'Email automation' },
    description: { es: 'Descarga de adjuntos y reenvío por lotes vía IMAP/SMTP, con configuración OAuth2 sin secretos en el código y registro en SQLite.', en: 'Attachment download and batch forwarding over IMAP/SMTP, with OAuth2 setup that keeps secrets out of the code and SQLite logging.' },
    tags: ['Python', 'PySide6', 'IMAP/SMTP', 'OAuth2', 'SQLite'], links: [],
  },
  {
    id: 'bioguard', category: 'web', image: 'bioguard-card.jpg', gallery: ['bioguard.jpg'],
    title: { es: 'BioGuard — gestión biomédica', en: 'BioGuard — biomedical management' },
    description: { es: 'Aplicación web de gestión biomédica: equipos, áreas, cronograma de mantenimientos, licencias, contratos, controles de calidad, incidentes y reportes, con perfiles de usuario y permisos por módulo (crear, editar, eliminar y ver).', en: 'Biomedical management web app: equipment, areas, maintenance schedule, licenses, contracts, quality controls, incidents and reports, with user profiles and per-module permissions (create, edit, delete and view).' },
    tags: [{ es: 'Gestión biomédica', en: 'Biomedical management' }, { es: 'Roles y permisos', en: 'Roles & permissions' }, { es: 'Exportación SQL', en: 'SQL export' }], links: [],
  },
  {
    id: 'merstore', category: 'web', image: 'merstore-desktop.jpg',
    gallery: ['merstore-desktop.jpg', 'merstore-tablet.jpg', 'merstore-mobile.jpg', 'merstore-desktop-catalogo.jpg', 'merstore-mobile-catalogo.jpg'],
    title: { es: 'Mer.Store — sitio web de papelería', en: 'Mer.Store — stationery website' },
    description: { es: 'Sitio responsivo para una tienda de papelería: catálogo por categorías, diseño mobile-first y contacto directo por WhatsApp y redes sociales.', en: 'Responsive website for a stationery store: category catalog, mobile-first design and direct contact via WhatsApp and social media.' },
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'], links: [],
  },
  {
    id: 'inventario', category: 'web', image: null,
    title: { es: 'Sistema de Gestión de Inventario', en: 'Inventory Management System' },
    description: { es: 'Aplicación full stack con frontend y backend independientes conectados por API REST, con colección de pruebas en Postman.', en: 'Full stack app with independent frontend and backend connected through a REST API, with a Postman test collection.' },
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    links: [{ label: 'frontend', href: `${gh}/frontend-inventario` }, { label: 'backend', href: `${gh}/backend-inventario` }],
  },
  {
    id: 'calculadora', category: 'web', practice: true, image: 'calculadora.jpg',
    title: { es: 'Calculadora', en: 'Calculator' },
    description: { es: 'Calculadora web para practicar lógica y manejo del DOM con JavaScript.', en: 'Web calculator built to practice logic and DOM handling in JavaScript.' },
    tags: ['JavaScript', 'HTML', 'CSS'], links: [{ label: 'code', href: `${gh}/Calculadora` }],
  },
  {
    id: 'google-clone', category: 'web', practice: true, image: 'google-clone.jpg',
    title: { es: 'Clon funcional de Google', en: 'Google clone' },
    description: { es: 'Práctica de maquetado y estilos avanzados con CSS.', en: 'Layout and advanced styling practice with CSS.' },
    tags: ['CSS', 'HTML'], links: [{ label: 'code', href: `${gh}/GoogleClone` }],
  },
  {
    id: 'blog', category: 'web', practice: true, image: null,
    title: { es: 'Blog personal', en: 'Personal blog' },
    description: { es: 'Sitio de blog estático en HTML.', en: 'Static blog site in HTML.' },
    tags: ['HTML'], links: [{ label: 'code', href: `${gh}/Blog` }],
  },
];

