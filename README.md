🌟 Portfolio Profesional - Full Stack Developer
https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black
https://img.shields.io/badge/React-18.2+-61DAFB?logo=react&logoColor=white
https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs&logoColor=white
https://img.shields.io/badge/MongoDB-5.0+-47A248?logo=mongodb&logoColor=white
https://img.shields.io/badge/Express.js-4.18+-000000?logo=express&logoColor=white

Un portfolio moderno y responsive desarrollado con el stack MERN, diseñado para mostrar habilidades técnicas y proyectos de desarrollo web. Incluye funcionalidades avanzadas como modo oscuro/claro, internacionalización y un diseño completamente adaptable.

🚀 Características Principales
✨ Funcionalidades Destacadas
🎨 Diseño Moderno: Interfaz limpia y profesional con animaciones fluidas

🌙 Modo Claro/Oscuro: Adaptable a las preferencias del usuario

🌐 Multiidioma: Soporte para español e inglés

📱 Fully Responsive: Optimizado para todos los dispositivos

⚡ High Performance: Carga rápida y optimización SEO

🔍 SEO Optimizado: Estructura semántica para mejor posicionamiento

🛠 Tecnologías Implementadas
Frontend	Backend	Base de Datos	Herramientas
React 18.2+	Node.js	MongoDB	Git
JavaScript ES6+	Express.js	Mongoose	Vite
HTML5 & CSS3	JWT Auth		ESLint
React Router	Nodemailer		Prettier
📁 Estructura del Proyecto
text
portfolio/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/         # Páginas principales
│   │   ├── hooks/         # Custom hooks
│   │   ├── contexts/      # Context API (Theme, Language)
│   │   ├── styles/        # Estilos globales y themes
│   │   └── utils/         # Utilidades y constants
│   ├── public/            # Assets estáticos
│   └── package.json
├── server/                # Backend Node.js
│   ├── controllers/       # Lógica de negocio
│   ├── models/           # Modelos de datos MongoDB
│   ├── routes/           # Rutas de la API
│   ├── middleware/       # Autenticación y validaciones
│   └── config/           # Configuración de la BD
└── README.md
🎯 Secciones del Portfolio
1. 🏠 Hero Section
Presentación personal impactante

Call-to-action directo

Indicadores de scroll

2. 👨‍💻 Sobre Mí
Background profesional

Skills técnicas y blandas

Educación y certificaciones

3. 💼 Proyectos Destacados
Galería de proyectos con filtros

Detalles técnicos completos

Enlaces a demo y código fuente

Tecnologías utilizadas en cada proyecto

4. 🛠 Habilidades Técnicas
Frontend: React, JavaScript, HTML5, CSS3

Backend: Node.js, Express, MongoDB

Herramientas: Git, Docker, AWS

Metodologías: Agile, Scrum, CI/CD

5. 📞 Contacto
Formulario de contacto funcional

Links a redes profesionales

Información de contacto directa

⚡ Instalación y Configuración
Prerrequisitos
Node.js 18+

MongoDB 5.0+

Git

🛠 Configuración Local
Clonar el repositorio

bash
git clone https://github.com/RobertoMontanes/Portfolio.git
cd Portfolio
Configurar Backend

bash
cd server
npm install
cp .env.example .env
# Configurar variables de entorno en .env
npm run dev
Configurar Frontend

bash
cd client
npm install
npm run dev
🔧 Variables de Entorno
env
# Server
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

# Client
VITE_API_URL=http://localhost:5000
🚀 Despliegue
Opciones Recomendadas:
Plataforma	Frontend	Backend	Base de Datos
Vercel	✅	❌	-
Netlify	✅	❌	-
Railway	❌	✅	✅
MongoDB Atlas	-	-	✅
📦 Scripts Disponibles
json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
}
🎨 Personalización
Cambiar Información Personal
Editar src/data/personalInfo.js

Modificar src/data/projects.js

Actualizar src/data/skills.js

Customizar Estilos
Temas: Modificar src/styles/theme.js

Colores: Actualizar CSS variables en src/styles/globals.css

Fuentes: Cambiar en src/styles/fonts.css

📈 Métricas de Performance
Lighthouse Score: 95+

First Contentful Paint: <1.5s

Largest Contentful Paint: <2.5s

Cumulative Layout Shift: <0.1

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Por favor:

Fork el proyecto

Crear una rama feature (git checkout -b feature/AmazingFeature)

Commit cambios (git commit -m 'Add some AmazingFeature')

Push a la rama (git push origin feature/AmazingFeature)

Abrir un Pull Request

📄 Licencia
Distribuido bajo la Licencia MIT. Ver LICENSE para más información.

📞 Contacto
Roberto Montañés - GitHub - roberto.montanes.dev@gmail.com

Portfolio Live: https://robertomontanes.dev

🎯 Próximas Características
✨ Blog integrado

📊 Dashboard de analytics

🔔 Notificaciones en tiempo real

🎥 Sección de videos tutoriales

🔍 Búsqueda avanzada en proyectos

<div align="center">
⭐ ¿Te gusta este proyecto? Déjale una estrella en GitHub!
¡Construido con ❤️ y mucho ☕!

</div>
Última actualización: Noviembre 2025
