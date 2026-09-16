export default function About() {
  return (
    <article className="mx-auto max-w-2xl p-6 md:p-10">
      <h2 className="text-3xl font-extrabold tracking-tight">Tentang lab ini</h2>
      <p className="mt-4 text-sm leading-7 text-subdued">
        MyMusikgwe adalah Progressive Web App untuk latihan mata kuliah
        Pemrograman Perangkat Bergerak. Pemutar musiknya tiruan — tidak ada
        audio — tetapi tiga pilar PWA-nya nyata:{' '}
        <strong className="font-semibold text-white">app shell</strong>,{' '}
        <strong className="font-semibold text-white">manifest</strong>, dan{' '}
        <strong className="font-semibold text-white">service worker</strong>.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-subdued">
        <li>Pasang dari menu peramban (Tambahkan ke layar utama).</li>
        <li>Matikan jaringan lalu muat ulang — shell tetap muncul.</li>
        <li>
          Buka DevTools &rarr; Application untuk memeriksa manifest dan service
          worker.
        </li>
      </ul>
    </article>
  )
}
