# SquadForge - Sistema LFG (Looking For Group)

🎮 **Sistema de Búsqueda de Grupos para Juegos Cooperativos**

Sistema moderno y escalable para encontrar compañeros de juego en títulos como Destiny 2, World of Warcraft, League of Legends, y más.

## 🚀 Características Principales

### Core Features
- ✅ Crear y unirse a grupos por juego, modo, región y horario
- 👤 Perfiles de usuario con integración OAuth (Steam/PSN/Xbox)
- 💬 Chat en tiempo real
- ⭐ Sistema de reputación post-partida

### Modelo Freemium
- **Básico (Gratis)**: Búsqueda ilimitada de grupos
- **Premium ($5/mes)**: Filtros avanzados, grupos destacados, prioridad en matchmaking

## 🛠 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **NextAuth.js** (OAuth)

### Backend
- **NestJS** (Node.js)
- **PostgreSQL** + **Prisma ORM**
- **Redis** (Cache)
- **Socket.io** (Real-time)

### Deployment
- **Vercel** (Frontend)
- **Railway** (Backend)

## 📁 Estructura del Proyecto

```
squadforge-lfg/
├── frontend/          # Next.js App
├── backend/           # NestJS API
├── docker-compose.yml # PostgreSQL + Redis
└── README.md
```

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servicios de desarrollo
npm run dev

# Solo frontend
npm run dev:frontend

# Solo backend
npm run dev:backend
```

## 📋 Roadmap

- [x] Configuración inicial del proyecto
- [ ] Autenticación con Steam OAuth
- [ ] Módulo de grupos (CRUD)
- [ ] UI de búsqueda y filtros
- [ ] Chat en tiempo real
- [ ] Sistema de reputación
- [ ] Modelo freemium

---

**Desarrollado con ❤️ para la comunidad gaming** 