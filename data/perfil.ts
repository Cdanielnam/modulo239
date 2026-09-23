export interface Perfil {
  nombre: string;
  nombreCorto: string;
  rol: string;
  ubicacion: string;
  correo: string;
  github: string;
  repositorio: string;
  sitio: string;
  colegio: string;
}

export const perfil: Perfil = {
  nombre: "César Daniel Elías Villanueva",
  nombreCorto: "César Elías",
  rol: "Desarrollador de software",
  ubicacion: "San Salvador, El Salvador",
  correo: "cesarelias0207@gmail.com",
  github: "https://github.com/Cdanielnam",
  repositorio: "https://github.com/Cdanielnam/modulo239",
  sitio: "https://modulo239.vercel.app",
  colegio: "Colegio Español Padre Arrupe",
};

export interface Dato {
  valor: string;
  etiqueta: string;
}

export const datos: Dato[] = [
  { valor: "9", etiqueta: "proyectos destacados" },
  { valor: "4", etiqueta: "plataformas: web, móvil, API e IoT" },
  { valor: "3", etiqueta: "años de formación técnica" },
  { valor: "45+", etiqueta: "repositorios en GitHub" },
];

export interface GrupoHabilidad {
  titulo: string;
  descripcion: string;
  items: string[];
}

export const habilidades: GrupoHabilidad[] = [
  {
    titulo: "Frontend",
    descripcion: "Interfaces responsivas y accesibles.",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    titulo: "Backend",
    descripcion: "APIs REST y lógica de negocio por capas.",
    items: ["C# / .NET", "ASP.NET Core", "Java", "Spring Boot", "Python", "PHP"],
  },
  {
    titulo: "Móvil",
    descripcion: "Apps multiplataforma y nativas.",
    items: ["Flutter (Dart)", "Kotlin", "Jetpack Compose", "React Native (Expo)"],
  },
  {
    titulo: "Bases de datos",
    descripcion: "Modelado, procedimientos y triggers.",
    items: ["SQL Server", "T-SQL", "MySQL", "Entity Framework Core"],
  },
  {
    titulo: "IA e IoT",
    descripcion: "Visión por computadora y hardware.",
    items: ["YOLO (Ultralytics)", "ESP32-CAM", "WebSocket", "PWA"],
  },
  {
    titulo: "Herramientas",
    descripcion: "Control de versiones y despliegue.",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Visual Studio", "NetBeans", "Android Studio"],
  },
];

export interface Etapa {
  periodo: string;
  titulo: string;
  detalle: string;
  temas: string[];
}

export const formacion: Etapa[] = [
  {
    periodo: "2026",
    titulo: "3.er año · Proyecto innovador",
    detalle:
      "Sistemas completos de varias capas: base de datos, API, web y móvil. Despliegue en la nube y visión por computadora.",
    temas: ["APIs REST en .NET", "Spring Boot", "Flutter", "Kotlin", "Next.js + Vercel", "YOLO"],
  },
  {
    periodo: "2025",
    titulo: "2.º año · Aplicaciones de escritorio y web",
    detalle: "Programación en C# con Windows Forms y ASP.NET MVC, conectadas a bases de datos.",
    temas: ["C#", "Windows Forms", "ASP.NET MVC", "SQL"],
  },
  {
    periodo: "2024",
    titulo: "1.er año · Fundamentos",
    detalle: "Lógica de programación, maquetación web y programación orientada a objetos.",
    temas: ["HTML y CSS", "Java", "Python", "POO y SOLID", "MySQL + PHP"],
  },
];
