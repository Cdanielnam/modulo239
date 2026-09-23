import Image from "next/image";
import Link from "next/link";
import foto from "@/public/perfil.jpg";
import { datos, formacion, habilidades, perfil } from "@/data/perfil";
import { proyectos } from "@/data/proyectos";
import TituloSeccion from "@/components/TituloSeccion";
import ExploradorProyectos from "@/components/ExploradorProyectos";
import { IconoCorreo, IconoFlecha, IconoGitHub, IconoUbicacion } from "@/components/Iconos";

export default function Home() {
  return (
    <>
      {/* Inicio */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="fondo-cuadricula absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-32 md:grid-cols-[1.35fr_1fr] md:pt-40">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Disponible para prácticas profesionales
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Hola, soy <span className="texto-degradado">{perfil.nombreCorto}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Estudiante de Bachillerato Técnico en Desarrollo de Software. Construyo aplicaciones web,
              móviles y APIs, desde la base de datos hasta la interfaz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-ink transition hover:bg-brand"
              >
                Ver proyectos <IconoFlecha />
              </Link>
              <a
                href={perfil.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                <IconoGitHub /> GitHub
              </a>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-slate-300 transition hover:text-white"
              >
                Contactar
              </Link>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <IconoUbicacion /> {perfil.ubicacion}
            </p>
          </div>

          <div className="relative mx-auto w-64 sm:w-72">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand to-brand-2 opacity-60 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-panel p-1.5">
              <Image
                src={foto}
                alt={`Fotografía de ${perfil.nombre}`}
                placeholder="blur"
                loading="eager"
                sizes="(min-width: 640px) 288px, 256px"
                className="aspect-[314/328] w-full rounded-3xl object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-6 rounded-xl border border-white/10 bg-panel/95 px-4 py-3 shadow-xl backdrop-blur">
              <p className="font-mono text-xs text-brand">3.er año</p>
              <p className="text-sm font-medium text-white">Desarrollo de Software</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-20">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {datos.map((d) => (
              <div key={d.etiqueta} className="bg-ink px-6 py-6">
                <dt className="sr-only">{d.etiqueta}</dt>
                <dd className="text-3xl font-bold text-white">{d.valor}</dd>
                <dd className="mt-1 text-sm text-slate-400">{d.etiqueta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="scroll-mt-20 border-t border-white/5 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <TituloSeccion etiqueta="01 · Sobre mí" titulo="Del problema al sistema completo" />
            <div className="space-y-4 text-lg leading-relaxed text-slate-400">
              <p>
                Soy <strong className="text-white">{perfil.nombre}</strong>, estudiante de tercer año del
                Bachillerato Técnico Vocacional en Desarrollo de Software en el {perfil.colegio}, en San Salvador.
              </p>
              <p>
                En estos tres años pasé de maquetar páginas con HTML y CSS a construir sistemas completos:
                bases de datos en SQL Server con procedimientos y triggers, APIs REST en .NET, aplicaciones web
                con Spring Boot y Next.js, y apps móviles con Flutter y Kotlin.
              </p>
              <p>
                Mi proyecto más reciente, <strong className="text-white">EnRuta</strong>, combina visión por
                computadora y hardware: una ESP32-CAM y un modelo YOLO que cuentan pasajeros en tiempo real.
              </p>
            </div>
          </div>

          <ul className="grid content-center gap-4">
            {[
              ["Pienso en capas", "Separo datos, lógica e interfaz para que cada parte se pueda cambiar sin romper las demás."],
              ["Código ordenado", "Aplico programación orientada a objetos y principios SOLID en Java, C# y Python."],
              ["Aprendo rápido", "Cada módulo trajo una tecnología nueva: de Java a Flutter, de SQL a YOLO."],
              ["Idiomas", "Español nativo e inglés intermedio en lectura, escritura y conversación."],
            ].map(([titulo, texto]) => (
              <li key={titulo} className="rounded-2xl border border-white/10 bg-panel/60 p-5">
                <p className="font-semibold text-white">{titulo}</p>
                <p className="mt-1 text-slate-400">{texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="scroll-mt-20 border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <TituloSeccion
            etiqueta="02 · Habilidades"
            titulo="Tecnologías con las que trabajo"
            descripcion="Lo que he usado en proyectos reales durante la carrera, del frontend al hardware."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {habilidades.map((g) => (
              <div key={g.titulo} className="rounded-2xl border border-white/10 bg-panel/60 p-6">
                <h3 className="text-lg font-semibold text-white">{g.titulo}</h3>
                <p className="mt-1 text-sm text-slate-500">{g.descripcion}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="scroll-mt-20 border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <TituloSeccion
            etiqueta="03 · Proyectos"
            titulo="Lo que he construido"
            descripcion="Filtra por categoría y entra a cada proyecto para ver cómo está hecho."
          />
          <ExploradorProyectos proyectos={proyectos} />
        </div>
      </section>

      {/* Formación */}
      <section id="formacion" className="scroll-mt-20 border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <TituloSeccion
            etiqueta="04 · Formación"
            titulo={perfil.colegio}
            descripcion="Bachillerato Técnico Vocacional en Desarrollo de Software · 2024 – 2026"
          />
          <ol className="relative space-y-10 border-l border-white/10 pl-8">
            {formacion.map((e) => (
              <li key={e.periodo} className="relative">
                <span className="absolute -left-[41px] top-1 grid size-5 place-items-center rounded-full border border-brand/50 bg-ink">
                  <span className="size-2 rounded-full bg-brand" />
                </span>
                <p className="font-mono text-sm text-brand">{e.periodo}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{e.titulo}</h3>
                <p className="mt-2 max-w-2xl text-slate-400">{e.detalle}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {e.temas.map((t) => (
                    <li key={t} className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-xs text-slate-300">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-20 border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-panel to-ink p-10 text-center sm:p-16">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-brand-2/20 blur-3xl" aria-hidden="true" />
            <p className="relative font-mono text-sm text-brand">05 · Contacto</p>
            <h2 className="relative mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Tienes un proyecto o una vacante?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-slate-400">
              Estoy buscando mi primera experiencia profesional. Escríbeme y te respondo lo antes posible.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${perfil.correo}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-ink transition hover:bg-brand"
              >
                <IconoCorreo /> {perfil.correo}
              </a>
              <a
                href={perfil.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                <IconoGitHub /> github.com/Cdanielnam
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
