export type Categoria = "Web" | "Móvil" | "Backend" | "IA / IoT";

export const categorias: Categoria[] = ["Web", "Móvil", "Backend", "IA / IoT"];

export interface Proyecto {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string[];
  aspectos: string[];
  tecnologias: string[];
  categorias: Categoria[];
  anio: number;
  repositorio?: string;
  sitio?: string;
  destacado?: boolean;
}

export const proyectos: Proyecto[] = [
  {
    slug: "obracheck",
    nombre: "ObraCheck",
    resumen:
      "Control de avance y presupuesto de obras de construcción, con base de datos, API, web y app móvil.",
    descripcion: [
      "Una constructora llevaba sus obras en hojas de Excel separadas y se enteraba tarde de los sobrecostos. ObraCheck centraliza los datos, elimina el cálculo manual y avisa apenas detecta una desviación.",
      "La lógica de negocio vive en SQL Server: los procedimientos almacenados y triggers recalculan el avance y generan alertas. La API en .NET los invoca, y tanto la web como la app móvil consumen la misma API, así las reglas son iguales en todas partes.",
    ],
    aspectos: [
      "11 tablas, 6 vistas, 19 triggers y 12 procedimientos almacenados con auditoría completa.",
      "API REST con 31 endpoints en 10 controladores, documentada con Swagger.",
      "Aplicación web en Spring Boot + Thymeleaf y aplicación móvil en Flutter.",
      "Borrado lógico: ningún registro de negocio se elimina físicamente.",
    ],
    tecnologias: ["SQL Server", "ASP.NET Core 10", "EF Core", "Spring Boot", "Flutter"],
    categorias: ["Web", "Móvil", "Backend"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/fase-3",
    destacado: true,
  },
  {
    slug: "enruta",
    nombre: "EnRuta · Monitor de abordaje",
    resumen:
      "Una ESP32-CAM envía video desde la unidad y un modelo YOLO cuenta a los pasajeros para compararlos con los boletos vendidos.",
    descripcion: [
      "La cámara va dentro del bus y transmite video a un servidor. El servidor cuenta a las personas con un modelo YOLO26s entrenado y compara ese número contra los boletos comprados.",
      "Si están todos, la pantalla muestra «¡Listos para partir!». Si falta alguien, arranca una espera de 5 minutos con cuenta regresiva. Si hay más personas que boletos, avisa de sobrecupo.",
    ],
    aspectos: [
      "Modelo YOLO26s entrenado con un dataset propio de pasajeros.",
      "El modelo corre en el servidor, no en la ESP32, por límite de memoria.",
      "Monitor web y PWA actualizados en tiempo real por WebSocket.",
      "La ESP32 recibe el estado de vuelta y lo indica con su LED.",
    ],
    tecnologias: ["Python", "YOLO", "ESP32-CAM", "WebSocket", "PWA"],
    categorias: ["IA / IoT", "Web"],
    anio: 2026,
    destacado: true,
  },
  {
    slug: "cesarportafolio",
    nombre: "CesarPortafolio",
    resumen: "Este mismo portafolio: Next.js con App Router, TypeScript y Tailwind CSS, desplegado en Vercel.",
    descripcion: [
      "Desarrollado para el módulo 3.8 como portafolio profesional. Usa Server Components por defecto y Client Components solo donde hace falta interacción, como el filtro de proyectos y el menú móvil.",
      "Cada proyecto tiene su propia página generada a partir de una ruta dinámica, y cada push a GitHub dispara un nuevo despliegue en Vercel.",
    ],
    aspectos: [
      "Ruta dinámica /proyectos/[slug] generada de forma estática con generateStaticParams.",
      "Imágenes optimizadas con next/image y fuentes con next/font.",
      "Datos tipados con interfaces de TypeScript.",
      "Despliegue continuo: GitHub → Vercel.",
    ],
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    categorias: ["Web"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/modulo239",
    sitio: "https://modulo239.vercel.app",
  },
  {
    slug: "mangoworld",
    nombre: "Mangoworld",
    resumen: "Tienda web de mangos con catálogo de variedades, pedidos, comentarios y panel de administración.",
    descripcion: [
      "Aplicación ASP.NET Core MVC organizada en controladores, modelos, DTOs y una capa de datos con Entity Framework Core.",
      "Los clientes consultan las variedades, hacen pedidos y dejan comentarios; el administrador gestiona el catálogo y los pedidos.",
    ],
    aspectos: [
      "Controladores separados para variedades, pedidos, comentarios y administración.",
      "DTOs para no exponer las entidades directamente a las vistas.",
      "Vistas Razor con recursos estáticos en wwwroot.",
    ],
    tecnologias: ["C#", "ASP.NET Core MVC", "EF Core", "Razor"],
    categorias: ["Web", "Backend"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/Mangoworld",
  },
  {
    slug: "presupuestos",
    nombre: "Presupuestos",
    resumen: "Gestión de proyectos y sus presupuestos, con una vista de resumen de lo gastado.",
    descripcion: [
      "Aplicación ASP.NET Core MVC para registrar proyectos, asignarles presupuestos y ver un resumen consolidado.",
    ],
    aspectos: [
      "Módulos de proyectos, presupuestos y resumen.",
      "Persistencia con Entity Framework Core.",
    ],
    tecnologias: ["C#", "ASP.NET Core MVC", "EF Core"],
    categorias: ["Web", "Backend"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/Presupuestos",
  },
  {
    slug: "tienda-online-api",
    nombre: "TiendaOnlineAPI",
    resumen: "Backend de una tienda en línea en ASP.NET Core, con su contexto de datos en Entity Framework.",
    descripcion: [
      "Proyecto ASP.NET Core que combina controladores y Razor Pages sobre un contexto de datos de Entity Framework Core para una tienda en línea.",
    ],
    aspectos: ["Contexto de datos con EF Core.", "Controladores y Razor Pages en el mismo proyecto."],
    tecnologias: ["C#", "ASP.NET Core", "EF Core"],
    categorias: ["Backend"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/TiendaOnlineAPI",
  },
  {
    slug: "apps-flutter",
    nombre: "AnimeApp y Movie Explorer",
    resumen: "Dos apps multiplataforma en Flutter que consumen APIs públicas de anime y de películas.",
    descripcion: [
      "Proyectos de la guía de diseño multiplataforma con Flutter. AnimeApp consume la Jikan API (MyAnimeList) y Movie Explorer el catálogo público de Cinemeta.",
      "Ambas se ejecutan en el navegador, en Windows y en Android desde el mismo código.",
    ],
    aspectos: [
      "Consumo de APIs REST sin clave de acceso.",
      "Un solo código para web, escritorio y móvil.",
    ],
    tecnologias: ["Flutter", "Dart", "REST"],
    categorias: ["Móvil"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/guia444",
  },
  {
    slug: "mi-tarjeta-compose",
    nombre: "MiTarjeta Compose",
    resumen: "Aplicación Android nativa con Kotlin y Jetpack Compose.",
    descripcion: [
      "Evaluación del módulo de desarrollo móvil: interfaz declarativa construida con Jetpack Compose y compilada con Gradle (Kotlin DSL).",
    ],
    aspectos: ["Interfaz declarativa con Compose.", "Configuración de Gradle con Kotlin DSL."],
    tecnologias: ["Kotlin", "Jetpack Compose", "Gradle"],
    categorias: ["Móvil"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/evaluacion",
  },
  {
    slug: "sgau",
    nombre: "SGAU · Gestión universitaria",
    resumen: "Sistema de gestión académica universitaria con módulos para docentes y rectoría, y su propia API.",
    descripcion: [
      "Proyecto final con varios componentes: un módulo para docentes, un panel de administración para rectoría, una API y la base de datos del sistema.",
    ],
    aspectos: [
      "Roles separados: docente y rector/administrador.",
      "API dedicada y respaldo de la base de datos incluido.",
    ],
    tecnologias: ["C#", "API REST", "SQL Server"],
    categorias: ["Web", "Backend"],
    anio: 2026,
    repositorio: "https://github.com/Cdanielnam/SistemaGestionUniversitario",
  },
];

export function obtenerProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
