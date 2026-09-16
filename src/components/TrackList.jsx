import Cover from './Cover.jsx'
import { tracks } from '../data/tracks.js'

export default function TrackList({ index, onSelect }) {
  return (
    <ol className="mt-4">
      {tracks.map((track, i) => (
        <li key={track.id}>
          <button
            type="button"
            onClick={() => onSelect(i)}
            className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition hover:bg-hover"
          >
            <span className="w-5 text-center text-sm text-subdued">
              {i + 1}
            </span>
            <Cover id={track.id} className="h-10 w-10 rounded" />
            <span className="min-w-0 flex-1">
              <span
                className={`block truncate text-sm font-medium ${
                  i === index ? 'text-signal' : ''
                }`}
              >
                {track.title}
              </span>
              <span className="block truncate text-xs text-subdued">
                {track.artist}
              </span>
            </span>
            <span className="hidden w-40 truncate px-4 text-xs text-subdued sm:block">
              {track.album}
            </span>
            <span className="text-xs text-subdued">{track.duration}</span>
          </button>
        </li>
      ))}
    </ol>
  )
}
