import Module from 'module';
import path from 'path';

const parentModule = module;

export default (code, dirname) => {
  const resource = 'test.js';
  const module = new Module(resource, parentModule);
  // eslint-disable-next-line no-underscore-dangle
  module.paths = Module._nodeModulePaths(
    path.resolve(__dirname, '../fixtures')
  );
  module.filename = resource;

  if (!dirname) {
    // eslint-disable-next-line no-param-reassign
    dirname = path.resolve(__dirname, '../fixtures/example/build/Release');
  }

  // eslint-disable-next-line no-underscore-dangle
  module._compile(`__dirname = ${JSON.stringify(dirname)};${code};`, resource);

  return module.exports;
};
