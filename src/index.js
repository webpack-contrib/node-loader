/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';

export default function loader() {
  const options = getOptions(this);

  validateOptions(schema, options, {
    name: 'Node Loader',
    baseDataPath: 'options',
  });

  const filename = this.resourcePath;

  return `
try {
  global.process.dlopen(module, ${JSON.stringify(filename)}${
    options.flags ? `, ${JSON.stringify(options.flags)}` : ''
  });
} catch (error) {
  throw new Error('node-loader:\\n' + error);
}
`;
}
