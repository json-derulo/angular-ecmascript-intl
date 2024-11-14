import js from "@eslint/js";
import angularEslint from "angular-eslint";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/", ".angular/", "**/*.js"] },
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
          "./projects/angular-ecmascript-intl/tsconfig.lib.json",
          "./projects/angular-ecmascript-intl/tsconfig.spec.json",
          "./projects/angular-intl-demo/tsconfig.app.json",
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
      // ToDo: enable rule again once Angular ESLint adapted to v19 changes
      // "@angular-eslint/prefer-standalone-component": "error",
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
