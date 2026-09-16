import Cover from './Cover.jsx'
import Icon from './Icon.jsx'

export default function TrackCard({ track, onPlay }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group w-40 shrink-0 rounded-lg bg-panel p-3 text-left transition hover:bg-hover"
    >
      <div className="relative">
        <Cover id={track.id} className="aspect-square w-full rounded" />
        <span className="absolute right-2 bottom-2 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-signal text-ink opacity-0 shadow-xl transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <Icon name="play" className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 truncate text-sm font-semibold">{track.title}</p>
      <p className="truncate text-xs text-subdued">{track.artist}</p>
    </button>
  )
}
