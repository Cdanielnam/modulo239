"use client";

import Link from "next/link";
import { useState } from "react";

const enlaces = [
  { href: "/#sobre-mi", texto: "Sobre mí" },
  { href: "/#habilidades", texto: "Habilidades" },
  { href: "/#proyectos", texto: "Proyectos" },
  { href: "/#formacion", texto: "Formación" },
  { href: "/#contacto", texto: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setAbierto(false)}>
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-ink">
            CE
          </span>
          <span className="font-semibold text-white">César Elías</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg text-slate-300 hover:bg-white/5 md:hidden"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto(!abierto)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6" aria-hidden="true">
            {abierto ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {abierto && (
        <ul id="menu-movil" className="border-t border-white/5 px-6 pb-4 md:hidden">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                onClick={() => setAbierto(false)}
                className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
