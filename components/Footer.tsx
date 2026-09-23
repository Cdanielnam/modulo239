import { perfil } from "@/data/perfil";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {perfil.nombre}</p>
        <p>
          Hecho con Next.js y Tailwind CSS · Desplegado en Vercel ·{" "}
          <a href={perfil.repositorio} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brand">
            Código fuente
          </a>
        </p>
      </div>
    </footer>
  );
}
