import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default defineConfig([
  /* Ignored paths */
  globalIgnores(['dist', 'node_modules', 'coverage', '*.min.js']),

  /* Shared base for all TS/TSX files  */
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
    ],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2023,
    },
    rules: {
      /* TypeScript  */
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-includes': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/spaced-comment': 'off',

      /* Unused vars  */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      /* Import order  */
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      /* Formatting */
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
        },
      ],
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],
      'semi': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'max-len': ['error', { code: 180, tabWidth: 2, ignoreUrls: true }],
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'no-trailing-spaces': 'error',
      'no-whitespace-before-property': 'error',
      'no-irregular-whitespace': 'error',
      'object-curly-spacing': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', { named: 'never', asyncArrow: 'always' }],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'func-call-spacing': ['error', 'never'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'lines-between-class-members': ['error', 'always'],
      'spaced-comment': 'off',

      /* Code quality */
      'camelcase': 'off',
      'complexity': ['error', 110],
      'default-case': 'error',
      'eqeqeq': ['error', 'always'],
      'guard-for-in': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'off',
      'no-empty': 'off',
      'no-empty-pattern': 'off',
      'no-eval': 'warn',
      'no-shadow-restricted-names': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-duplicate-imports': 'error',
      'no-duplicate-case': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-magic-numbers': 'off',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-dupe-keys': 'error',
      'no-useless-escape': 'off',
      'no-invalid-this': 'off',
      'no-restricted-imports': 'off',
      'no-debugger': 'warn',
      'prefer-const': 'error',
      'radix': 'error',
      'array-bracket-spacing': 'off',

      /* React — all off (handled by react-hooks plugin below) */ 
      'react/jsx-no-target-blank': 'off',
      'react/no-render-return-value': 'off',
      'react/no-string-refs': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
    },
  },

  /* React App source files (src/**) */
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      /* Browser console */
      'no-console': 'error',

      /* Accessibility */
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
    },
  },

  /* Node / Config files */
  {
    files: ['vite.config.ts', 'eslint.config.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      'no-console': 'off',
    },
  },

  /* Middleware files — intentional console usage for debugging */
  {
    files: ['src/**/config/*-middleware.ts'],
    rules: {
      'no-console': 'off',
    },
  },
])
