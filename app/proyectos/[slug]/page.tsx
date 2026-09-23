import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { obtenerProyecto, proyectos } from "@/data/proyectos";
import { IconoFlecha, IconoGitHub } from "@/components/Iconos";

// Solo existen las rutas de los proyectos definidos; cualquier otra da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const proyecto = obtenerProyecto(slug);
  return proyecto ? { title: proyecto.nombre, description: proyecto.resumen } : {};
}

export default async function PaginaProyecto(props: PageProps<"/proyectos/[slug]">) {
  const { slug } = await props.params;
  const proyecto = obtenerProyecto(slug);
  if (!proyecto) notFound();

  const indice = proyectos.findIndex((p) => p.slug === slug);
  const siguiente = proyectos[(indice + 1) % proyectos.length];

  return (
    <article className="relative overflow-hidden">
      <div className="fondo-cuadricula absolute inset-0 h-96" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-32">
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
          <IconoFlecha className="size-4 rotate-180" /> Volver a proyectos
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm text-brand">{proyecto.anio}</span>
          {proyecto.categorias.map((c) => (
            <span key={c} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">
              {c}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{proyecto.nombre}</h1>
        <p className="mt-5 text-xl leading-relaxed text-slate-300">{proyecto.resumen}</p>

        <div className="mt-10 space-y-4 text-lg leading-relaxed text-slate-400">
          {proyecto.descripcion.map((parrafo) => (
            <p key={parrafo}>{parrafo}</p>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-semibold text-white">Aspectos técnicos</h2>
        <ul className="mt-4 space-y-3">
          {proyecto.aspectos.map((a) => (
            <li key={a} className="flex gap-3 text-slate-300">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-semibold text-white">Tecnologías</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {proyecto.tecnologias.map((t) => (
            <li key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-slate-200">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
          {proyecto.repositorio && (
            <a
              href={proyecto.repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-ink transition hover:bg-brand"
            >
              <IconoGitHub /> Ver código en GitHub
            </a>
          )}
          <Link
            href={`/proyectos/${siguiente.slug}`}
            className="ml-auto inline-flex items-center gap-2 text-slate-300 hover:text-white"
          >
            Siguiente: {siguiente.nombre} <IconoFlecha />
          </Link>
        </div>
      </div>
    </article>
  );
}
