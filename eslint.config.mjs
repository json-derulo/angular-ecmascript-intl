import js from "@eslint/js";
import angularEslint from "angular-eslint";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["**/dist/", "**/.angular/", "**/*.js", "**/coverage/"] },
  {
    files: ["**/*.ts"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angularEslint.configs.tsRecommended,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: [
          "./libs/angular-ecmascript-intl/tsconfig.lib.json",
          "./libs/angular-ecmascript-intl/tsconfig.spec.json",
          "./demo/tsconfig.app.json",
        ],
      },
      globals: {
        ...globals.browser,
      },
    },
    processor: angularEslint.processInlineTemplates,
    rules: {
      "@typescript-eslint/no-extraneous-class": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-deprecated": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-literal-enum-member": "off",
      "@angular-eslint/prefer-standalone": "error",
    },
  },
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      globals: {
        ...globals.jasmine,
      },
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angularEslint.configs.templateRecommended],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "error",
    },
  },
);
