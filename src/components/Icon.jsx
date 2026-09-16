const paths = {
  home: 'M12 3.1 3 10.2V21h6.2v-6.4h5.6V21H21V10.2z',
  info: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  play: 'M8 5.14v13.72L19 12z',
  pause: 'M6 5h4v14H6zm8 0h4v14h-4z',
  prev: 'M6 6h2v12H6zm3 6 9-6v12z',
  next: 'M16 6h2v12h-2zM6 6l9 6-9 6z',
  volume: 'M3 9v6h4l5 4V5L7 9H3zm13.5 3a3.5 3.5 0 0 0-2-3.2v6.4a3.5 3.5 0 0 0 2-3.2z',
}

export default function Icon({ name, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
