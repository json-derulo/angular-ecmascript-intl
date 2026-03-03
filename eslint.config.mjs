import angularEslint from "angular-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig(
  { ignores: ["**/dist/", "**/.angular/", "**/coverage/"] },
  {
    files: ["**/*.html"],
    extends: [...angularEslint.configs.templateRecommended],
  },
);
