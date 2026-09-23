"use client";

import { useState } from "react";
import { categorias, type Categoria, type Proyecto } from "@/data/proyectos";
import TarjetaProyecto from "@/components/TarjetaProyecto";

type Filtro = "Todos" | Categoria;

export default function ExploradorProyectos({ proyectos }: { proyectos: Proyecto[] }) {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const visibles =
    filtro === "Todos" ? proyectos : proyectos.filter((p) => p.categorias.includes(filtro));

  const opciones: Filtro[] = ["Todos", ...categorias];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por categoría">
        {opciones.map((o) => {
          const cantidad = o === "Todos" ? proyectos.length : proyectos.filter((p) => p.categorias.includes(o)).length;
          const activo = filtro === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={activo}
              onClick={() => setFiltro(o)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activo
                  ? "border-brand bg-brand text-ink font-medium"
                  : "border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
              }`}
            >
              {o} <span className={activo ? "text-ink/70" : "text-slate-500"}>{cantidad}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((p) => (
          <TarjetaProyecto key={p.slug} proyecto={p} />
        ))}
      </div>
    </div>
  );
}
