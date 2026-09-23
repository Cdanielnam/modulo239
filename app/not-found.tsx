import Link from "next/link";

export default function NoEncontrado() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="font-mono text-sm text-brand">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold text-white">Esta página no existe</h1>
      <p className="mt-4 text-slate-400">Puede que el enlace esté mal escrito o que el proyecto ya no esté publicado.</p>
      <Link href="/" className="mt-8 rounded-xl bg-white px-5 py-3 font-medium text-ink hover:bg-brand">
        Volver al inicio
      </Link>
    </section>
  );
}
