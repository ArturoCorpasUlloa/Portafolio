// group: 'ai' | 'cloud' | 'data' | 'dev'   ·   image: ruta dentro de public/img (null = solo aparece en "Otros cursos")
// Orden: del más reciente al más antiguo. Para agregar uno nuevo, copia un bloque y guarda la imagen en public/img/certs/
export const certifications = [
  { id: 'nodo-ia', group: 'ai', title: { es: 'Transformación Digital con IA y Automatización', en: 'Digital Transformation with AI and Automation' }, issuer: 'Nodo · Academia Desafío Latam', hours: 150, date: { es: 'Sep 2026', en: 'Sep 2026' }, image: 'certs/cert-nodo-ia.jpg' },
  { id: 'aws-genai', group: 'ai', title: { es: 'AWS Academy Graduate: Generative AI Foundations', en: 'AWS Academy Graduate: Generative AI Foundations' }, issuer: 'AWS Academy', hours: 12, date: { es: 'Jun 2026', en: 'Jun 2026' }, image: 'certs/cert-aws-genai.jpg' },
  { id: 'aws-cloud', group: 'cloud', title: { es: 'AWS Academy Graduate: Cloud Foundations', en: 'AWS Academy Graduate: Cloud Foundations' }, issuer: 'AWS Academy', hours: 20, date: { es: 'May 2026', en: 'May 2026' }, image: 'certs/cert-aws-cloud.jpg' },
  { id: 'powerbi', group: 'data', title: { es: 'Power BI', en: 'Power BI' }, issuer: 'Platzi · Ruta N Medellín', hours: 17, date: { es: 'Oct 2025', en: 'Oct 2025' }, image: 'certs/cert-powerbi.jpg' },
  { id: 'ciencia-datos', group: 'data', title: { es: 'Ciencia de Datos para Análisis de Negocio', en: 'Data Science for Business Analysis' }, issuer: 'Platzi · Ruta N Medellín', hours: 12, date: { es: 'Oct 2025', en: 'Oct 2025' }, image: 'certs/cert-ciencia-datos.jpg' },
  { id: 'python', group: 'dev', title: { es: 'Fundamentos de Python', en: 'Python Fundamentals' }, issuer: 'Platzi · Ruta N Medellín', hours: 16, date: { es: 'Oct 2025', en: 'Oct 2025' }, image: 'certs/cert-python.jpg' },
  { id: 'react', group: 'dev', title: { es: 'Curso de React.js', en: 'React.js Course' }, issuer: 'Platzi', hours: 19, date: { es: 'Mar 2025', en: 'Mar 2025' }, image: 'certs/cert-react.jpg' },
  { id: 'js-total', group: 'dev', title: { es: 'JavaScript TOTAL: de cero a desarrollador web', en: 'JavaScript TOTAL: from zero to web developer' }, issuer: 'Udemy · Escuela Directa', hours: 26.5, date: { es: 'Oct 2023', en: 'Oct 2023' }, image: 'certs/cert-js-total.jpg' },
];

// Cursos sin imagen en el portafolio (texto simple)
export const otherCourses = [
  { es: 'Programa de Formación Habilidades en Programación — Universidad de Antioquia, 600 h (2022)', en: 'Programming Skills Training Program — Universidad de Antioquia, 600 h (2022)' },
  { es: 'Introducción al Desarrollo Frontend — Meta / Coursera (2025)', en: 'Introduction to Frontend Development — Meta / Coursera (2025)' },
  { es: 'Excel Profesional para Empresas — Udemy (2024)', en: 'Professional Excel for Business — Udemy (2024)' },
  { es: 'Introducción a Java y Java I — Fundaula (2024)', en: 'Introduction to Java and Java I — Fundaula (2024)' },
  { es: 'Curso Profesional de Git y GitHub — Platzi (2023)', en: 'Professional Git and GitHub Course — Platzi (2023)' },
];
