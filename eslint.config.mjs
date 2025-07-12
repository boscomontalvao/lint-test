import hiporepo from 'eslint-config-hiporepo';

export default [
  ...hiporepo,
  {
    ignores: ['**/*.spec.ts', '**/*.test.ts', 'tests/', '__tests__/', '.angular',
      '.vscode', 'node_modules', 'public'
    ],
  }
];