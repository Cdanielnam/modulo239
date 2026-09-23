interface TituloSeccionProps {
  etiqueta: string;
  titulo: string;
  descripcion?: string;
}

export default function TituloSeccion({ etiqueta, titulo, descripcion }: TituloSeccionProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-brand">{etiqueta}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{titulo}</h2>
      {descripcion && <p className="mt-4 text-lg leading-relaxed text-slate-400">{descripcion}</p>}
    </div>
  );
}
