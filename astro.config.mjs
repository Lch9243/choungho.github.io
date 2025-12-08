// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
    // GitHub 유저 페이지 도메인
  site: "https://lch9243.github.io",

  // 이 레포 이름 (앞에 / 붙이기!)
  base: "/choungho.github.io",
});
