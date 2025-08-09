/**
 * Inspect ESLint configuration.
 * Command: `npx @eslint/config-inspector@latest`
 */
import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import globals from 'globals'
/**
 * Plugins
 */
import pluginQuery from '@tanstack/eslint-plugin-query'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import promisePlugin from 'eslint-plugin-promise'
import reactPlugin from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import tsEslint from 'typescript-eslint'

/**
 * JSX A11y config - Accessibility rules for JSX elements.
 */
const jsxA11yConfig = {
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  ...jsxA11yPlugin.flatConfigs.recommended,
  languageOptions: {
    ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
}

/**
 * Typescript eslint
 */
const tsEslintConfig = tsEslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/ignore': [
        'node_modules',
        '\\.(json|css|svg|png|jpe?g|gif|webp)$',
      ],
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'warn',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
    },
  },
)

const reactRefreshConfig = {
  plugins: {
    'react-refresh': reactRefreshPlugin,
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  },
}

const reactPluginConfig = {
  plugins: {
    react: reactPlugin,
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'off',
  },
}

/**
 * Import plugin configuration
 * - Enforces best practices for module imports.
 */
const importPluginConfig = {
  plugins: {
    import: fixupPluginRules(importPlugin),
  },

  rules: {
    'import/no-unresolved': 0, // Handled by TypeScript compiler
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 1,
    'import/no-anonymous-default-export': 1,
  },
}

/** @type { import('eslint').Linter.FlatConfig} */
const config = [
  { ignores: ['node_modules', 'dist'] },
  ...tsEslintConfig,
  prettierPlugin,
  reactPluginConfig,
  reactCompiler.configs.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactRefreshConfig,
  promisePlugin.configs['flat/recommended'],
  jsxA11yConfig,
  importPluginConfig,
  reactHooksPlugin.configs['recommended-latest'],
  ...pluginQuery.configs['flat/recommended'],
]

export default config
