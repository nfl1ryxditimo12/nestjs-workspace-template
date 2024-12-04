module.exports = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
  trailingComma: 'all',
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '.module$',
    '',
    '^@common/(.*)$',
    '^@database/(.*)$',
    '^@auth/(.*)$',
    '',
    '^@api/(.*)$',
    '',
    '^[.]',
  ],
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  importOrderSeperation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderTypeScriptVersion: '5.0.0',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};