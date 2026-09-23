# CesarPortafolio

Portafolio profesional de **César Daniel Elías Villanueva**, desarrollado con Next.js y desplegado en Vercel.

Módulo 3.8 · Proyecto Innovador de Desarrollo de Software · 3.er año de Bachillerato de Software
Colegio Español Padre Arrupe · Docente: Daniel Sosa

- **Guía 1:** Portafolio profesional con Next.js
- **Guía 2:** Despliegue de aplicaciones en Vercel

## Tecnologías

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 |
| Despliegue | Vercel (pendiente) |

## Estructura

```
app/
├── layout.tsx                Layout compartido: metadatos, fuentes, Navbar y Footer
├── page.tsx                  Página principal (/)
├── proyectos/[slug]/page.tsx Ruta dinámica: detalle de cada proyecto (/proyectos/obracheck, ...)
├── not-found.tsx             Página 404
├── icon.svg                  Ícono del sitio
└── globals.css               Estilos globales y tema
components/
├── Navbar.tsx                Client Component (menú móvil con useState)
├── ExploradorProyectos.tsx   Client Component (filtro de proyectos por categoría)
├── TarjetaProyecto.tsx       Server Component
├── TituloSeccion.tsx
├── Footer.tsx
└── Iconos.tsx
data/
├── perfil.ts                 Datos personales, habilidades y formación (tipados)
└── proyectos.ts              Interfaz Proyecto y lista de proyectos
public/
└── perfil.jpg
docs/                         Documento de las guías 1 y 2 y capturas de pantalla
```

## Conceptos de la guía aplicados

- **App Router:** cada `page.tsx` dentro de `app/` es una ruta.
- **Server y Client Components:** todo es de servidor por defecto; solo `Navbar` y `ExploradorProyectos` usan `"use client"` porque necesitan estado.
- **Rutas dinámicas:** `app/proyectos/[slug]` genera una página por proyecto con `generateStaticParams` (generación estática en el build).
- **TypeScript:** interfaces `Proyecto`, `Perfil`, `GrupoHabilidad` y `Etapa`.
- **Optimización:** `next/image` para la foto de perfil y `next/font` para la tipografía Geist.
- **Metadatos:** título y descripción por página con `metadata` y `generateMetadata`.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir <http://localhost:3000>.

```bash
npm run build   # construir para producción
npm run start   # ejecutar el build
```

## Documentación de las guías

- [Guias_3.8_G1_G2_CesarElias.pdf](docs/Guias_3.8_G1_G2_CesarElias.pdf) (también en [.docx](docs/Guias_3.8_G1_G2_CesarElias.docx))
- Capturas de pantalla de cada paso: [docs/capturas](docs/capturas)

## Despliegue

Pendiente: conectar este repositorio con Vercel (Import → preset Next.js → Deploy). Una vez conectado,
cada `git push` a la rama `main` disparará un nuevo build y despliegue.
