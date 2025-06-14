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
    </div>
  );
}
