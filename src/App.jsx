import { useState } from 'react'
import Icon from './components/Icon.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import About from './views/About.jsx'
import Home from './views/Home.jsx'
import { tracks } from './data/tracks.js'

const navItems = [
  { id: 'home', label: 'Beranda', icon: 'home' },
  { id: 'about', label: 'Tentang', icon: 'info' },
]

export default function App() {
  const [view, setView] = useState('home')
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  const select = (i) => {
    setIndex(i)
    setPlaying(true)
  }

  const step = (delta) =>
    setIndex((i) => (i + delta + tracks.length) % tracks.length)

  return (
    <div className="flex h-svh flex-col bg-ink text-white">
      <div className="flex min-h-0 flex-1 gap-2 p-2">
        <Sidebar view={view} onNavigate={setView} />
        <main className="min-h-0 flex-1 overflow-y-auto rounded-lg bg-panel">
          {view === 'home' ? (
            <Home index={index} onSelect={select} />
          ) : (
            <About />
          )}
        </main>
      </div>

      <PlayerBar
        index={index}
        playing={playing}
        onToggle={() => setPlaying((p) => !p)}
        onStep={step}
      />

      <nav className="flex border-t border-white/10 bg-ink md:hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setView(item.id)}
            className={`flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-semibold transition ${
              view === item.id ? 'text-white' : 'text-subdued'
            }`}
          >
            <Icon
              name={item.icon}
              className={`h-5 w-5 ${view === item.id ? 'text-signal' : ''}`}
            />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
