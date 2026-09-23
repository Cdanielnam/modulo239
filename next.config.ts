import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hay otro package-lock.json en la carpeta del usuario; se fija la raíz
  // del proyecto para que Turbopack no la tome como raíz del workspace.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
