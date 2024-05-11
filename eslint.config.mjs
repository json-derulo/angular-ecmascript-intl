import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import angularEslintPluginTemplate from "@angular-eslint/eslint-plugin-template";
import angularEslintTemplateParser from "@angular-eslint/template-parser";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import deprecation from "eslint-plugin-deprecation";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  { ignores: ["dist/", ".angular/", "**/*.js"] },
  {
    files: ["**/*.ts"],
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
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      deprecation,
      "@angular-eslint": angularEslintPlugin,
    },
    processor: angularEslintPluginTemplate.processors["extract-inline-html"],
    rules: {
      ...Object.assign(
        {},
        ...tseslint.configs.strictTypeChecked.map(({ rules }) => rules),
      ),
      ...Object.assign(
        {},
        ...tseslint.configs.stylisticTypeChecked.map(({ rules }) => rules),
      ),
      ...angularEslintPlugin.configs.recommended.rules,
      "@typescript-eslint/no-extraneous-class": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-literal-enum-member": "off",
      "deprecation/deprecation": "error",
      "@angular-eslint/prefer-standalone-component": "error",
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
    plugins: {
      "@angular-eslint/template": angularEslintPluginTemplate,
    },
    languageOptions: {
      parser: angularEslintTemplateParser,
    },
    rules: {
      ...angularEslintPluginTemplate.configs.recommended.rules,
      "@angular-eslint/template/prefer-control-flow": "error",
    },
  },
  prettier,
];
