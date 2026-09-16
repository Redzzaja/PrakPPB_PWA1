import Cover from './Cover.jsx'
import Icon from './Icon.jsx'
import { tracks } from '../data/tracks.js'

const ctrl = 'text-subdued transition hover:text-white'

export default function PlayerBar({ index, playing, onToggle, onStep }) {
  const track = tracks[index]

  return (
    <div className="border-t border-white/10 bg-ink px-3 py-3 md:px-4">
      <div className="mx-auto flex max-w-[1600px] items-center gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Cover id={track.id} className="h-12 w-12 rounded md:h-14 md:w-14" />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{track.title}</p>
            <p className="truncate text-xs text-subdued">{track.artist}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 md:flex-1 md:justify-center">
          <button
            type="button"
            onClick={() => onStep(-1)}
            className={ctrl}
            aria-label="Sebelumnya"
          >
            <Icon name="prev" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onToggle}
            aria-label={playing ? 'Jeda' : 'Putar'}
            aria-pressed={playing}
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition hover:scale-105"
          >
            <Icon name={playing ? 'pause' : 'play'} className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onStep(1)}
            className={ctrl}
            aria-label="Berikutnya"
          >
            <Icon name="next" className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="35"
            aria-label="Progres trek"
            className="h-1 w-40 accent-signal"
          />
          <Icon name="volume" className="h-4 w-4 text-subdued" />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="70"
            aria-label="Volume"
            className="h-1 w-24 accent-signal"
          />
        </div>
      </div>
    </div>
  )
}
