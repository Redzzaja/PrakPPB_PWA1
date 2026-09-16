import Cover from './Cover.jsx'
import Icon from './Icon.jsx'
import { tracks } from '../data/tracks.js'

const nav = [
  { id: 'home', label: 'Beranda', icon: 'home' },
  { id: 'about', label: 'Tentang', icon: 'info' },
]

export default function Sidebar({ view, onNavigate }) {
  return (
    <aside className="hidden w-60 shrink-0 flex-col gap-2 md:flex">
      <div className="rounded-lg bg-panel p-4">
        <p className="px-2 text-lg font-extrabold tracking-tight">
          MyMusikgwe
        </p>
        <nav className="mt-4 space-y-1">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center gap-4 rounded-md px-2 py-2 text-sm font-bold transition hover:text-white ${
                view === item.id ? 'text-white' : 'text-subdued'
              }`}
            >
              <Icon
                name={item.icon}
                className={`h-6 w-6 ${view === item.id ? 'text-signal' : ''}`}
              />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto rounded-lg bg-panel p-4">
        <p className="px-2 text-sm font-bold text-subdued">Perpustakaan Anda</p>
        <ul className="mt-3 space-y-1">
          {tracks.map((track) => (
            <li key={track.id} className="flex items-center gap-3 rounded-md p-2">
              <Cover id={track.id} className="h-10 w-10 rounded" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{track.title}</p>
                <p className="truncate text-xs text-subdued">{track.artist}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
