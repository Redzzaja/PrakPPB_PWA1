import Cover from '../components/Cover.jsx'
import Icon from '../components/Icon.jsx'
import TrackCard from '../components/TrackCard.jsx'
import TrackList from '../components/TrackList.jsx'
import { tracks } from '../data/tracks.js'

function greeting() {
  const hour = new Date().getHours()
  if (hour < 11) return 'Selamat pagi'
  if (hour < 15) return 'Selamat siang'
  if (hour < 19) return 'Selamat sore'
  return 'Selamat malam'
}

export default function Home({ index, onSelect }) {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
        {greeting()}
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {tracks.slice(0, 6).map((track, i) => (
          <button
            key={track.id}
            type="button"
            onClick={() => onSelect(i)}
            className={`group flex items-center gap-3 overflow-hidden rounded-md pr-3 text-left transition hover:bg-hover ${
              i === index ? 'bg-hover' : 'bg-raised'
            }`}
          >
            <Cover id={track.id} className="h-16 w-16" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">
                {track.title}
              </span>
              <span className="block truncate text-xs text-subdued">
                {track.artist}
              </span>
            </span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-signal text-ink opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <Icon name="play" className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      <section className="mt-8">
        <header className="flex items-baseline justify-between">
          <h3 className="text-lg font-bold">Dibuat untuk Anda</h3>
          <span className="text-xs font-semibold text-subdued">
            Lihat semua
          </span>
        </header>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {tracks.map((track, i) => (
            <TrackCard
              key={track.id}
              track={track}
              onPlay={() => onSelect(i)}
            />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-lg font-bold">Semua trek</h3>
        <TrackList index={index} onSelect={onSelect} />
      </section>
    </div>
  )
}
