const fs = require('fs');
const path = require('path');

const snapshot = JSON.parse(fs.readFileSync(path.join(__dirname, 'snapshot.json'), 'utf8'));
const collections = snapshot.data.collections.map(c => c.collection);

const typeMap = {
  uuid: 'string',
  text: 'string',
  string: 'string',
  integer: 'number',
  float: 'number',
  decimal: 'number',
  boolean: 'boolean',
  dateTime: 'string',
  timestamp: 'string',
  date: 'string',
  time: 'string',
  json: 'any',
  csv: 'string[]',
  hash: 'string',
  file: 'string',
  alias: 'any'
};

const types = collections.map(c => {
  const fields = snapshot.data.fields.filter(f => f.collection === c);
  const interfaceName = Object.keys(fields).length === 0 ? `export interface ${c} {}` : `export interface ${c} {\n${fields.map(f => {
    let tsType = typeMap[f.type] || 'any';
    // Let's also handle relation arrays if possible...
    return `  ${f.field}?: ${tsType};`;
  }).join('\n')}\n}`;
  return interfaceName;
});

const schemaInterface = `export interface Schema {\n${collections.map(c => `  ${c}: ${c}[];`).join('\n')}\n}`;

fs.writeFileSync(path.join(__dirname, 'lib', 'directus.ts'), `import { createDirectus, rest } from '@directus/sdk';\n\n${types.join('\n\n')}\n\n${schemaInterface}\n\nexport const directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_DIRECTUS_URL as string).with(rest());\n`);
console.log('Successfully generated types from snapshot.json to lib/directus.ts');
