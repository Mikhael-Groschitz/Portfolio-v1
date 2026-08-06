import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Estende as configurações padrão do Next.js e TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Seus ignores globais (opcional, pois o Next já ignora .next e node_modules)
  {
    ignores: [".next/**", "node_modules/**"]
  }
];

export default eslintConfig;