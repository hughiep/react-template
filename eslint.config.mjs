import path from 'node:path'
import { fileURLToPath } from 'node:url'

import eslint from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import globals from 'globals'
/**
 * Plugins
 */
import tsParser from '@typescript-eslint/parser'
import tsEslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import promisePlugin from 'eslint-plugin-promise'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

/**
 * Inspect ESLint configuration.
 * Command: `npx @eslint/config-inspector@latest`
 */

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/**
 * JSX A11y config
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
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports' },
      ],
    },
  },
)

const config = [
  {
    ignores: ['**/dist', '**/node_modules'],
  },
  ...tsEslintConfig,
  prettierPlugin,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  promisePlugin.configs['flat/recommended'],
  jsxA11yConfig,

  // Uncompatible with flat configs
  ...fixupConfigRules(
    compat.extends(
      'plugin:import/recommended',
      'plugin:react-hooks/recommended',
    ),
  ),

  {
    plugins: {
      react: reactPlugin,
      import: fixupPluginRules(importPlugin),
      'react-refresh': reactRefreshPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/ignore': [
        'node_modules',
        '\\.(json|css|svg|png|jpe?g|gif|webp)$',
      ],
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'react/prop-types': 0,

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
  },
]

export default config
