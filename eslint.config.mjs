import angularEslint from 'angular-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  { ignores: ['**/dist/', '**/.angular/', '**/coverage/'] },
  // ESLint is only used for linting HTML files
  {
    files: ['**/*.html'],
    extends: [...angularEslint.configs.templateRecommended],
  },
);
