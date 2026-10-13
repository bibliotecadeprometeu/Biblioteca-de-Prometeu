import React, { useState, useEffect } from 'react';
import { 
  Compass, Search, Heart, Eye, Download, 
  ExternalLink, ArrowLeft, Filter, Sparkles, Folder, FileText, Film, 
  Tv, BookOpen, Music, Code, Disc, Skull, CheckCircle, 
  X, Layers, Calendar, User, Info, AlertCircle, Bookmark, PackageCheck
} from 'lucide-react';

const INITIAL_WORKS = [
  {
    id: 'work-1',
    title: 'Chronos Odyssey: Alpha',
    slug: 'chronos-odyssey-alpha',
    description: 'Um RPG de ação atmosférico desenvolvido em Unreal Engine 5 ambientado em ruínas flutuantes.',
    fullDescription: 'Chronos Odyssey é uma obra autoral que explora manipulação temporal em combates táticos dinâmicos. Enfrente chefes colossais e desvende os mistérios de civilizações esquecidas neste projeto independente de grande escala.',
    category: 'Jogos',
    genres: ['RPG', 'Ação', 'Aventura'],
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    mediaGallery: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1200'
    ],
    author: 'Prometeu Studios',
    releaseYear: '2026',
    platform: 'Windows, Linux',
    fileSize: '4.2 GB',
    fileFormat: '.zip',
    version: '1.2.0',
    updatedAt: '2026-03-10',
    downloadUrl: '#download-game',
    boxArtUrl: '#download-box-manual',
    hasManual: true,
    externalLinks: [{ label: 'Site Oficial', url: '#' }],
    published: true,
    featured: true
  },
  {
    id: 'work-2',
    title: 'Neon Horizon - O Filme',
    slug: 'neon-horizon-filme',
    description: 'Curta-metragem animado cyberpunk sobre memórias digitais e contrabando de consciência.',
    fullDescription: 'Em um futuro distópico onde memórias são comercializadas como mercadorias físicas, um hacker cibernético decide roubar o arquivo mais sagrado da megacorporação dominante.',
    category: 'Filmes',
    genres: ['Sci-Fi', 'Cyberpunk', 'Animação'],
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    mediaGallery: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200'
    ],
    author: 'Prometeu Animações',
    releaseYear: '2025',
    platform: 'Streaming / Download MP4',
    fileSize: '1.8 GB',
    fileFormat: '.mp4',
    version: '1.0.1',
    updatedAt: '2025-11-20',
    downloadUrl: '#download-movie',
    boxArtUrl: '#download-box',
    hasManual: false,
    externalLinks: [{ label: 'Trailer no YouTube', url: '#' }],
    published: true,
    featured: true
  },
  {
    id: 'work-3',
    title: 'Manual do Arquiteto Digital',
    slug: 'manual-do-arquiteto-digital',
    description: 'Livro digital ilustrado sobre design nostálgico, estética Frutiger Aero e interfaces dos anos 2000.',
    fullDescription: 'Uma jornada profunda através da história do design de interfaces, explorando a psicologia visual do ciano profundo, gradientes translúcidos, vidro fosco e o otimismo tecnológico do início do milênio.',
    category: 'Livros',
    genres: ['Design', 'Tecnologia', 'História'],
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    mediaGallery: [],
    author: 'Prometeu Press',
    releaseYear: '2026',
    platform: 'Multiplataforma (PDF / EPUB)',
    fileSize: '45 MB',
    fileFormat: '.pdf',
    version: '2.0',
    updatedAt: '2026-01-15',
    downloadUrl: '#download-book',
    boxArtUrl: '#download-cover',
    hasManual: true,
    externalLinks: [],
    published: true,
    featured: false
  },
  {
    id: 'work-4',
    title: 'Aethelgard - O Despertar (Vol. 1)',
    slug: 'aethelgard-o-despertar',
    description: 'Quadrinho indie de fantasia épica em estilo mangá ocidental.',
    fullDescription: 'Em um mundo onde continentes flutuam sobre mares de névoa eterna, jovens guerreiros descobrem runas ancestrais capazes de despertar deuses titânicos.',
    category: 'Quadrinhos',
    genres: ['Fantasia', 'Ação', 'Mangá'],
    coverUrl: 'https://images.unsplash.com/photo-1612833671384-84dff96f8c7b?auto=format&fit=crop&q=80&w=800',
    mediaGallery: [],
    author: 'Prometeu Comics',
    releaseYear: '2024',
    platform: 'Leitor CBR/CBZ',
    fileSize: '120 MB',
    fileFormat: '.cbz',
    version: '1.0',
    updatedAt: '2024-08-10',
    downloadUrl: '#download-comic',
    boxArtUrl: '#download-cover',
    hasManual: false,
    externalLinks: [],
    published: true,
    featured: false
  },
  {
    id: 'work-5',
    title: 'Sons do Amanhã (OST)',
    slug: 'sons-do-amanha-ost',
    description: 'Trilha sonora original composta com sintetizadores retro-futuristas dos anos 2000.',
    fullDescription: 'Coleção de faixas ambient, trance e synthwave inspiradas em sistemas operacionais clássicos, videogames retrô e paisagens utópicas.',
    category: 'Músicas e áudios',
    genres: ['Ambient', 'Synthwave', 'Trance'],
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    mediaGallery: [],
    author: 'Prometeu Soundlab',
    releaseYear: '2025',
    platform: 'Áudio FLAC / MP3 320kbps',
    fileSize: '350 MB',
    fileFormat: '.zip',
    version: '1.1',
    updatedAt: '2025-05-01',
    downloadUrl: '#download-music',
    boxArtUrl: '#download-artbook',
    hasManual: true,
    externalLinks: [],
    published: true,
    featured: false
  }
];

const CATEGORIES = [
  'Jogos',
  'Filmes',
  'Séries e animações',
  'Livros',
  'Quadrinhos',
  'Músicas e áudios',
  'Softwares',
  'Outros conteúdos'
];

export default function App() {
  const [works, setWorks] = useState(() => {
    const saved = localStorage.getItem('biblioteca_prometeu_works');
    return saved ? JSON.parse(saved) : INITIAL_WORKS;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('biblioteca_prometeu_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentView, setCurrentView] = useState('home'); // 'home', 'catalog', 'detail', 'favorites'
  const [selectedWorkId, setSelectedWorkId] = useState(null);
  
  // Catalog filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [sortBy, setSortBy] = useState('recent'); // 'recent', 'title', 'year'

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('biblioteca_prometeu_works', JSON.stringify(works));
  }, [works]);

  useEffect(() => {
    localStorage.setItem('biblioteca_prometeu_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedWorkId]);

  const toggleFavorite = (workId, e) => {
    if (e) e.stopPropagation();
    setFavorites(prev => 
      prev.includes(workId) ? prev.filter(id => id !== workId) : [...prev, workId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-sky-50 to-blue-100 text-slate-800 font-sans selection:bg-cyan-300 selection:text-slate-900 relative overflow-x-hidden">
      
      {/* Frutiger Aero Glossy Background Accents */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/90 via-cyan-200/40 to-transparent pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-cyan-200 shadow-[0_4px_25px_rgba(0,180,255,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with CD + Skull */}
          <button 
            onClick={() => { setCurrentView('home'); setSelectedCategory('Todos'); }}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-200 to-blue-500 p-[2px] shadow-[0_0_15px_rgba(0,150,255,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                {/* CD Iridescent Rings */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-200/40 to-blue-300/60 animate-pulse" />
                <div className="w-4 h-4 rounded-full bg-sky-100 border border-cyan-400 flex items-center justify-center z-10 shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                </div>
                {/* Skull Icon overlay inside CD */}
                <Skull className="w-5 h-5 text-sky-700 absolute z-20 opacity-90 drop-shadow-[0_0_5px_rgba(0,100,200,0.4)]" />
              </div>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-cyan-700 font-bold">Biblioteca Digital</span>
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-sky-900 via-cyan-800 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
                Prometeu
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => { setCurrentView('home'); setSelectedCategory('Todos'); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${currentView === 'home' ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,180,255,0.4)]' : 'text-slate-700 hover:bg-cyan-100/60'}`}
            >
              Início
            </button>
            <button 
              onClick={() => { setCurrentView('catalog'); setSelectedCategory('Todos'); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${currentView === 'catalog' ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,180,255,0.4)]' : 'text-slate-700 hover:bg-cyan-100/60'}`}
            >
              Catálogo Completo
            </button>
            <button 
              onClick={() => setCurrentView('favorites')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${currentView === 'favorites' ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,180,255,0.4)]' : 'text-slate-700 hover:bg-cyan-100/60'}`}
            >
              <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              Favoritos ({favorites.length})
            </button>
          </nav>

          {/* Mobile Favorites Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setCurrentView('favorites')}
              className="p-2.5 rounded-full bg-white/80 border border-cyan-300 text-rose-500 shadow-md relative"
              title="Meus Favoritos"
            >
              <Heart className="w-5 h-5 fill-rose-500" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      <main className="relative z-10 pb-20">
        {currentView === 'home' && (
          <HomeView 
            works={works} 
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onSelectWork={(id) => { setSelectedWorkId(id); setCurrentView('detail'); }} 
            onGoCatalog={(cat) => { setSelectedCategory(cat || 'Todos'); setCurrentView('catalog'); }}
            onSearchSubmit={(q) => { setSearchQuery(q); setCurrentView('catalog'); }}
          />
        )}

        {currentView === 'catalog' && (
          <CatalogView 
            works={works} 
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onSelectWork={(id) => { setSelectedWorkId(id); setCurrentView('detail'); }}
          />
        )}

        {currentView === 'detail' && (
          <DetailView 
            works={works} 
            workId={selectedWorkId} 
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onBack={() => setCurrentView('catalog')}
            onSelectWork={(id) => { setSelectedWorkId(id); window.scrollTo(0,0); }}
          />
        )}

        {currentView === 'favorites' && (
          <FavoritesView 
            works={works}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onSelectWork={(id) => { setSelectedWorkId(id); setCurrentView('detail'); }}
            onGoCatalog={() => setCurrentView('catalog')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-200 bg-white/80 backdrop-blur-md pt-12 pb-16 text-slate-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-[2px] flex items-center justify-center shadow-md">
                <Skull className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold text-slate-900">Biblioteca de Prometeu</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Plataforma digital independente inspirada na nostalgia dos anos 2000, unindo a estética Frutiger Aero e o charme do Nintendo Wii.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">Categorias</h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 4).map(cat => (
                <li key={cat}>
                  <button onClick={() => { setSelectedCategory(cat); setCurrentView('catalog'); }} className="hover:text-cyan-600 transition-colors">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">Explorar</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => { setSelectedCategory('Todos'); setCurrentView('catalog'); }} className="hover:text-cyan-600 transition-colors">Catálogo Completo</button></li>
              <li><button onClick={() => setCurrentView('home')} className="hover:text-cyan-600 transition-colors">Destaques da Semana</button></li>
              <li><button onClick={() => setCurrentView('favorites')} className="hover:text-cyan-600 transition-colors">Meus Favoritos ({favorites.length})</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-xs uppercase tracking-wider">Sobre a Tecnologia</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Desenvolvido com React, Tailwind CSS e armazenamento local persistente. Organização e liberdade digital.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-mono font-semibold shadow-inner">
              <Sparkles className="w-3.5 h-3.5" /> Frutiger Aero Clear v2.0
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-cyan-100 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Biblioteca de Prometeu. Todos os direitos reservados. Feito com nostalgia e inovação.
        </div>
      </footer>

    </div>
  );
}

function HomeView({ works, favorites, toggleFavorite, onSelectWork, onGoCatalog, onSearchSubmit }) {
  const [searchInput, setSearchInput] = useState('');
  const publishedWorks = works.filter(w => w.published !== false);
  const featuredWork = publishedWorks.find(w => w.featured) || publishedWorks[0];
  const recentWorks = publishedWorks.slice(0, 4);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchSubmit(searchInput);
    } else {
      onGoCatalog('Todos');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
      
      {/* Hero Search & Welcome Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 border border-white/80 p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,180,255,0.3)] text-white overflow-hidden">
        
        {/* Glossy overlay effect */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25),transparent)] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/30 border border-white/50 text-white text-xs font-bold shadow-sm backdrop-blur-md">
            <Disc className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '6s' }} />
            Bem-vindo à Biblioteca Digital de Prometeu
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight drop-shadow-md">
            Explore mundos, jogue, assista e descubra.
          </h1>
          
          <p className="text-sm sm:text-base text-sky-50 font-medium leading-relaxed drop-shadow">
            O repositório definitivo de criações digitais. Navegue por jogos, filmes, livros, músicas e softwares publicados com liberdade total.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Pesquisar por título, gênero ou autor..." 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-white/90 border border-white rounded-2xl pl-12 pr-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white shadow-inner text-sm font-medium"
              />
            </div>
            <button 
              type="submit" 
              className="px-8 py-3.5 rounded-2xl bg-white text-blue-700 font-extrabold hover:bg-sky-50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <Compass className="w-4 h-4" /> Buscar Obras
            </button>
          </form>
        </div>
      </div>

      {/* Featured Highlight Section */}
      {featuredWork && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#00b4d8]" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">Destaque da Semana</h2>
            </div>
            <button 
              onClick={() => onGoCatalog('Todos')}
              className="text-xs text-cyan-600 hover:text-cyan-800 font-bold flex items-center gap-1 cursor-pointer"
            >
              Ver catálogo completo →
            </button>
          </div>

          <div className="rounded-3xl bg-white border border-cyan-200 overflow-hidden shadow-[0_10px_30px_rgba(0,150,255,0.15)] grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] sm:min-h-[400px]">
              <img 
                src={featuredWork.coverUrl} 
                alt={featuredWork.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-xs shadow-lg uppercase tracking-wider border border-cyan-200">
                {featuredWork.category}
              </span>
              <button 
                onClick={(e) => toggleFavorite(featuredWork.id, e)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 text-slate-700 hover:bg-white transition-all shadow-lg cursor-pointer"
              >
                <Heart className={`w-5 h-5 ${favorites.includes(featuredWork.id) ? 'text-rose-500 fill-rose-500' : 'text-slate-600'}`} />
              </button>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white to-sky-50">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-cyan-700 font-mono font-bold">
                  <Calendar className="w-3.5 h-3.5" /> {featuredWork.releaseYear} • <User className="w-3.5 h-3.5 ml-1" /> {featuredWork.author}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {featuredWork.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featuredWork.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredWork.genres?.map(g => (
                    <span key={g} className="px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-semibold">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => onSelectWork(featuredWork.id)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(0,180,255,0.3)] flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Eye className="w-4 h-4" /> Acessar Detalhes e Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Categories Grid (Nintendo Wii Style Channel Cards) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#00b4d8]" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">Canais de Conteúdo</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const count = publishedWorks.filter(w => w.category === cat).length;
            let IconComponent = Folder;
            if (cat === 'Jogos') IconComponent = Disc;
            if (cat === 'Filmes' || cat === 'Séries e animações') IconComponent = Film;
            if (cat === 'Livros') IconComponent = BookOpen;
            if (cat === 'Quadrinhos') IconComponent = FileText;
            if (cat === 'Músicas e áudios') IconComponent = Music;
            if (cat === 'Softwares') IconComponent = Code;

            return (
              <button
                key={cat}
                onClick={() => onGoCatalog(cat)}
                className="group relative rounded-3xl bg-white border border-cyan-200 p-6 text-left hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(0,180,255,0.2)] transition-all duration-300 flex flex-col justify-between h-40 overflow-hidden cursor-pointer shadow-sm"
              >
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-cyan-100 rounded-full group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-600 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-slate-900 font-bold text-base sm:text-lg group-hover:text-cyan-600 transition-colors">
                    {cat}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {count} {count === 1 ? 'obra cadastrada' : 'obras cadastradas'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Works Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#00b4d8]" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">Publicações Recentes</h2>
          </div>
          <button 
            onClick={() => onGoCatalog('Todos')}
            className="text-xs text-cyan-600 hover:text-cyan-800 font-bold flex items-center gap-1 cursor-pointer"
          >
            Ver todas →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentWorks.map(work => (
            <div 
              key={work.id}
              onClick={() => onSelectWork(work.id)}
              className="group rounded-3xl bg-white border border-cyan-200 overflow-hidden hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(0,180,255,0.2)] transition-all duration-300 flex flex-col cursor-pointer shadow-sm relative"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={work.coverUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 text-slate-800 text-xs font-bold shadow">
                  {work.category}
                </span>
                <button 
                  onClick={(e) => toggleFavorite(work.id, e)}
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 text-slate-700 hover:bg-white transition-all shadow cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(work.id) ? 'text-rose-500 fill-rose-500' : 'text-slate-600'}`} />
                </button>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-cyan-700 font-mono font-bold">{work.releaseYear} • {work.author}</div>
                  <h3 className="text-slate-900 font-bold text-base group-hover:text-cyan-600 transition-colors line-clamp-1">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-cyan-100 flex items-center justify-between text-xs text-cyan-600 font-bold">
                  <span>Ver detalhes</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function CatalogView({ 
  works, 
  favorites,
  toggleFavorite,
  selectedCategory, 
  setSelectedCategory, 
  selectedGenre, 
  setSelectedGenre, 
  searchQuery, 
  setSearchQuery, 
  sortBy, 
  setSortBy, 
  onSelectWork 
}) {
  const allGenres = ['Todos', ...new Set(works.flatMap(w => w.genres || []))];
  const publishedWorks = works.filter(w => w.published !== false);

  const filteredWorks = publishedWorks.filter(work => {
    const matchesCategory = selectedCategory === 'Todos' || work.category === selectedCategory;
    const matchesGenre = selectedGenre === 'Todos' || (work.genres && work.genres.includes(selectedGenre));
    const matchesSearch = searchQuery === '' || 
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (work.author && work.author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesGenre && matchesSearch;
  });

  const sortedWorks = [...filteredWorks].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'year') {
      return (b.releaseYear || '').localeCompare(a.releaseYear || '');
    } else {
      return (b.updatedAt || '').localeCompare(a.updatedAt || '');
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Catálogo de Obras</h1>
          <p className="text-sm text-slate-600 mt-1">Explore todos os arquivos, jogos, filmes e publicações disponíveis.</p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Pesquisar no catálogo..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-cyan-200 rounded-2xl pl-11 pr-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 text-sm shadow-inner font-medium"
          />
        </div>
      </div>

      <div className="space-y-4 bg-white border border-cyan-200 rounded-3xl p-6 backdrop-blur-md shadow-lg">
        <div>
          <label className="block text-xs uppercase tracking-wider text-cyan-700 font-bold mb-2">Categoria</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('Todos')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === 'Todos' ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,180,255,0.4)]' : 'bg-sky-50 border border-cyan-200 text-slate-700 hover:bg-cyan-100'}`}
            >
              Todas ({publishedWorks.length})
            </button>
            {CATEGORIES.map(cat => {
              const count = publishedWorks.filter(w => w.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,180,255,0.4)]' : 'bg-sky-50 border border-cyan-200 text-slate-700 hover:bg-cyan-100'}`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-cyan-100">
          <div>
            <label className="block text-xs uppercase tracking-wider text-cyan-700 font-bold mb-2">Gênero</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-sky-50 border border-cyan-200 rounded-2xl px-4 py-2.5 text-slate-800 text-xs font-medium focus:outline-none focus:border-cyan-500"
            >
              {allGenres.map(g => (
                <option key={g} value={g} className="bg-white text-slate-800">{g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-cyan-700 font-bold mb-2">Ordenar por</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-sky-50 border border-cyan-200 rounded-2xl px-4 py-2.5 text-slate-800 text-xs font-medium focus:outline-none focus:border-cyan-500"
            >
              <option value="recent" className="bg-white text-slate-800">Mais Recentes</option>
              <option value="title" className="bg-white text-slate-800">Título (A-Z)</option>
              <option value="year" className="bg-white text-slate-800">Ano de Lançamento</option>
            </select>
          </div>
        </div>
      </div>

      {sortedWorks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedWorks.map(work => (
            <div 
              key={work.id}
              onClick={() => onSelectWork(work.id)}
              className="group rounded-3xl bg-white border border-cyan-200 overflow-hidden hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(0,180,255,0.2)] transition-all duration-300 flex flex-col cursor-pointer shadow-sm relative"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={work.coverUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 text-slate-800 text-xs font-bold shadow">
                  {work.category}
                </span>
                <span className="absolute top-3 right-14 px-3 py-1 rounded-full bg-cyan-500 text-white font-bold text-xs shadow">
                  v{work.version || '1.0'}
                </span>
                <button 
                  onClick={(e) => toggleFavorite(work.id, e)}
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 text-slate-700 hover:bg-white transition-all shadow cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(work.id) ? 'text-rose-500 fill-rose-500' : 'text-slate-600'}`} />
                </button>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-cyan-700 font-mono font-bold">
                    <span>{work.releaseYear}</span>
                    <span>{work.author}</span>
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg group-hover:text-cyan-600 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {work.genres?.map(g => (
                      <span key={g} className="px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-[10px] font-semibold">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-cyan-100 flex items-center justify-between text-xs text-cyan-600 font-bold">
                  <span>Ver detalhes e baixar</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-white border border-cyan-200 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center mx-auto text-cyan-600">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Nenhuma obra encontrada</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Não encontramos nenhum conteúdo correspondente aos filtros ou termos de pesquisa selecionados. Tente limpar os filtros.
          </p>
          <button 
            onClick={() => { setSelectedCategory('Todos'); setSelectedGenre('Todos'); setSearchQuery(''); }}
            className="px-6 py-2.5 rounded-2xl bg-cyan-500 text-white font-bold text-xs shadow-md hover:bg-cyan-600 transition-all cursor-pointer"
          >
            Redefinir Filtros
          </button>
        </div>
      )}

    </div>
  );
}

function FavoritesView({ works, favorites, toggleFavorite, onSelectWork, onGoCatalog }) {
  const favoriteWorks = works.filter(w => favorites.includes(w.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold mb-2 shadow-sm">
            <Heart className="w-4 h-4 fill-rose-500" /> Meus Favoritos Salvos
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Sua Coleção Pessoal</h1>
          <p className="text-sm text-slate-600 mt-1">Acesse rapidamente as obras que você marcou como favoritas neste navegador.</p>
        </div>
      </div>

      {favoriteWorks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteWorks.map(work => (
            <div 
              key={work.id}
              onClick={() => onSelectWork(work.id)}
              className="group rounded-3xl bg-white border border-cyan-200 overflow-hidden hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(0,180,255,0.2)] transition-all duration-300 flex flex-col cursor-pointer shadow-sm relative"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={work.coverUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 text-slate-800 text-xs font-bold shadow">
                  {work.category}
                </span>
                <button 
                  onClick={(e) => toggleFavorite(work.id, e)}
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200 text-slate-700 hover:bg-white transition-all shadow cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                </button>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-cyan-700 font-mono font-bold">
                    <span>{work.releaseYear}</span>
                    <span>{work.author}</span>
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg group-hover:text-cyan-600 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cyan-100 flex items-center justify-between text-xs text-cyan-600 font-bold">
                  <span>Ver detalhes e baixar</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-white border border-cyan-200 p-16 text-center space-y-6 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-500 shadow-inner">
            <Heart className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Nenhum favorito salvo ainda</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Explore o catálogo e clique no ícone de coração em qualquer obra para salvá-la aqui para acesso rápido.
            </p>
          </div>
          <button 
            onClick={onGoCatalog}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-md hover:brightness-110 transition-all cursor-pointer"
          >
            Explorar Catálogo
          </button>
        </div>
      )}

    </div>
  );
}

function DetailView({ works, workId, favorites, toggleFavorite, onBack, onSelectWork }) {
  const work = works.find(w => w.id === workId);
  const [activeImage, setActiveImage] = useState(0);

  if (!work) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Obra não encontrada</h2>
        <button onClick={onBack} className="px-6 py-2.5 rounded-2xl bg-cyan-500 text-white font-bold text-sm shadow-md">
          Voltar ao Catálogo
        </button>
      </div>
    );
  }

  const allImages = [work.coverUrl, ...(work.mediaGallery || [])].filter(Boolean);
  const relatedWorks = works.filter(w => w.category === work.category && w.id !== work.id && w.published !== false).slice(0, 3);

  const handleDownloadClick = () => {
    alert(`Iniciando download do arquivo principal de "${work.title}" (${work.fileSize || 'Tamanho padrão'})...`);
  };

  const handleDownloadBoxClick = () => {
    const hasManualText = work.hasManual ? ' e manual ilustrado' : '';
    alert(`Iniciando download da caixa digital (capa, contracapa${hasManualText}) de "${work.title}"...`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
      
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-cyan-200 text-cyan-700 text-xs font-bold hover:bg-cyan-50 transition-all shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para o Catálogo
        </button>

        <button 
          onClick={(e) => toggleFavorite(work.id, e)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs font-bold transition-all shadow-sm cursor-pointer ${favorites.includes(work.id) ? 'bg-rose-50 border-rose-200 text-rose-600' : 'bg-white border-cyan-200 text-slate-700 hover:bg-cyan-50'}`}
        >
          <Heart className={`w-4 h-4 ${favorites.includes(work.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
          {favorites.includes(work.id) ? 'Salvo nos Favoritos' : 'Favoritar Obra'}
        </button>
      </div>

      <div className="rounded-3xl bg-white border border-cyan-200 p-6 sm:p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,150,255,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Media / Gallery Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-cyan-200 h-80 sm:h-96 shadow-lg bg-sky-50">
            <img 
              src={allImages[activeImage] || work.coverUrl} 
              alt={work.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {allImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${activeImage === idx ? 'border-cyan-500 shadow-[0_0_10px_rgba(0,180,255,0.5)]' : 'border-cyan-200 opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Details Column */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider shadow-inner">
                {work.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-cyan-200 text-slate-700 text-xs font-mono font-semibold">
                Versão {work.version || '1.0'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {work.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-cyan-700 font-mono font-bold">
              <span>📅 Lançamento: {work.releaseYear}</span>
              <span>👤 Autor: {work.author}</span>
              <span>🔄 Atualizado em: {work.updatedAt}</span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed pt-2">
              {work.fullDescription || work.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {work.genres?.map(g => (
                <span key={g} className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Technical File Info Box (Requirements removed) */}
          <div className="rounded-2xl bg-sky-50/80 border border-cyan-200 p-4 space-y-2 text-xs">
            <div className="font-bold text-cyan-800 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-600" /> Detalhes do Pacote Digital
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-700">
              <div><span className="text-cyan-700 font-bold">Formato do Arquivo:</span> {work.fileFormat || 'Arquivo Digital'}</div>
              <div><span className="text-cyan-700 font-bold">Tamanho Total:</span> {work.fileSize || 'Desconhecido'}</div>
              {work.platform && <div className="col-span-2"><span className="text-cyan-700 font-bold">Plataformas Suportadas:</span> {work.platform}</div>}
              <div className="col-span-2"><span className="text-cyan-700 font-bold">Conteúdo do Encarte:</span> Capa, contracapa {work.hasManual ? 'e manual ilustrado incluso' : ''}</div>
            </div>
          </div>

          {/* Action Buttons: Download File, Download Box Art/Manual & External Links */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary File Download Button */}
              <button
                onClick={handleDownloadClick}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold hover:brightness-110 transition-all shadow-[0_4px_25px_rgba(0,180,255,0.4)] flex items-center justify-center gap-3 text-sm cursor-pointer"
              >
                <Download className="w-5 h-5" /> Baixar Conteúdo Principal
              </button>

              {/* Boxart / Cover & Manual Download Button */}
              <button
                onClick={handleDownloadBoxClick}
                className="py-4 px-6 rounded-2xl bg-cyan-100 hover:bg-cyan-200 border border-cyan-300 text-cyan-900 font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-sm cursor-pointer"
                title="Baixar arte da caixa, encarte e manual"
              >
                <PackageCheck className="w-5 h-5 text-cyan-700" /> Baixar Caixa e Manual
              </button>
            </div>

            {/* External Links */}
            {work.externalLinks && work.externalLinks.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {work.externalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-sky-50 border border-cyan-200 text-cyan-700 font-bold hover:bg-cyan-100 transition-all flex items-center justify-center gap-2 text-xs shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Related Works Grid */}
      {relatedWorks.length > 0 && (
        <div className="space-y-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#00b4d8]" />
            <h2 className="text-xl font-bold text-slate-900 tracking-wide">Outras Obras em {work.category}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedWorks.map(item => (
              <div
                key={item.id}
                onClick={() => { onSelectWork(item.id); }}
                className="group rounded-3xl bg-white border border-cyan-200 overflow-hidden hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(0,180,255,0.2)] transition-all cursor-pointer flex flex-col shadow-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.coverUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="text-slate-900 font-bold text-base group-hover:text-cyan-600 transition-colors line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                  <div className="text-xs text-cyan-600 font-bold pt-2">Ver detalhes →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}