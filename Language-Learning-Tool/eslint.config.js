import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,  // Include browser globals like window, document
        MyGlobalVar: 'readonly' // Example of adding custom globals
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-undef': 'error', // Ensure no-undef is enabled (default)
      'no-unused-vars': 'off', // Disable the no-unused-vars rule
      'react/no-unescaped-entities': 'off', // Disable no space entities rule
    },
    
  },

  {
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint",
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    "rules": {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"]
    }
  }
]
