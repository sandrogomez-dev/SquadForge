import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-2xl font-bold text-white">SquadForge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/groups" className="text-gray-300 hover:text-white transition-colors">
              Buscar Grupos
            </Link>
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Características
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Precios
            </Link>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Encuentra tu
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Squad Perfecto</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Conecta con gamers de todo el mundo. Forma equipos, conquista desafíos y forja amistades duraderas en tus juegos favoritos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/groups"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              Buscar Grupos Ahora
            </Link>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all">
              Ver Demo
            </button>
          </div>
        </div>
      </main>

      {/* Games Preview */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Juegos Populares
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Destiny 2", players: "2.1k" },
              { name: "World of Warcraft", players: "1.8k" },
              { name: "League of Legends", players: "3.2k" },
              { name: "Valorant", players: "1.5k" }
            ].map((game) => (
              <div key={game.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4"></div>
                <h3 className="text-white font-semibold mb-1">{game.name}</h3>
                <p className="text-gray-400 text-sm">{game.players} jugadores activos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir SquadForge?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La plataforma más completa para encontrar tu equipo ideal y dominar tus juegos favoritos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Búsqueda Inteligente</h3>
              <p className="text-gray-300">
                Filtros avanzados por juego, modo, región, horario y nivel de habilidad. Encuentra exactamente lo que buscas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Chat en Tiempo Real</h3>
              <p className="text-gray-300">
                Comunícate al instante con tu equipo. Planifica estrategias y coordina jugadas sin salir de la plataforma.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sistema de Reputación</h3>
              <p className="text-gray-300">
                Construye tu reputación y encuentra jugadores confiables. Califica y sé calificado por la comunidad.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integración OAuth</h3>
              <p className="text-gray-300">
                Conecta con Steam, PlayStation, Xbox y Discord. Verificación automática de perfiles y logros.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Programación Flexible</h3>
              <p className="text-gray-300">
                Programa sesiones de juego por adelantado. Coordina horarios en diferentes zonas horarias fácilmente.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Matchmaking Rápido</h3>
              <p className="text-gray-300">
                Algoritmos inteligentes para conexiones instantáneas. Encuentra tu equipo en segundos, no horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precios que se adaptan a ti
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comienza gratis y desbloquea funciones premium cuando estés listo para llevar tu juego al siguiente nivel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Básico</h3>
                <div className="text-4xl font-bold text-white mb-4">
                  $0<span className="text-lg font-normal text-gray-400">/mes</span>
                </div>
                <p className="text-gray-300">Perfecto para empezar tu aventura gaming</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Búsqueda ilimitada de grupos</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Chat básico en grupos</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Perfil de jugador</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Sistema de reputación</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Hasta 5 grupos simultáneos</span>
                </li>
              </ul>

              <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Comenzar Gratis
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-b from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/50 hover:border-purple-400 transition-all relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <div className="text-4xl font-bold text-white mb-4">
                  $5<span className="text-lg font-normal text-gray-400">/mes</span>
                </div>
                <p className="text-gray-300">Para jugadores serios que buscan la mejor experiencia</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Todo lo del plan Básico</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Filtros avanzados de búsqueda</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Grupos destacados en búsqueda</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Prioridad en matchmaking</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Grupos ilimitados</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Estadísticas detalladas</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Soporte prioritario</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Comenzar Premium
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              ¿Tienes un equipo grande? Contáctanos para planes empresariales
            </p>
            <button className="text-purple-400 hover:text-purple-300 font-semibold">
              Hablar con Ventas →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
