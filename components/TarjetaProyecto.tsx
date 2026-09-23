import Link from "next/link";
import type { Proyecto } from "@/data/proyectos";
import { IconoFlecha, IconoGitHub } from "@/components/Iconos";

export default function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-white/10 bg-panel/70 p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-20px_rgb(56_189_248/0.35)]">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {proyecto.categorias.map((c) => (
            <span key={c} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">
              {c}
            </span>
          ))}
        </div>
        {proyecto.destacado ? (
          <span className="rounded-full bg-brand/15 px-2.5 py-1 text-xs font-medium text-brand">Destacado</span>
        ) : (
          <span className="font-mono text-xs text-slate-500">{proyecto.anio}</span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white">{proyecto.nombre}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-slate-400">{proyecto.resumen}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologías">
        {proyecto.tecnologias.slice(0, 4).map((t) => (
          <li key={t} className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-xs text-slate-300">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-4 text-sm">
        <Link
          href={`/proyectos/${proyecto.slug}`}
          className="inline-flex items-center gap-1.5 font-medium text-brand hover:gap-2.5 transition-all"
        >
          Ver detalle <IconoFlecha />
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
        {proyecto.repositorio && (
          <a
            href={proyecto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 ml-auto inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
          >
            <IconoGitHub className="size-4" /> Código
          </a>
        )}
      </div>
    </article>
  );
}
