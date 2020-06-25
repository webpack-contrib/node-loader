/**
 * @jest-environment node
 */
import path from 'path';

import {
  compile,
  execute,
  getCompiler,
  getErrors,
  getModuleSource,
  getWarnings,
  readAsset,
} from './helpers';

describe('loader', () => {
  it('should work', async () => {
    const compiler = getCompiler('simple.js');
    const stats = await compile(compiler);

    expect(getModuleSource('./hello_world.node', stats)).toMatchSnapshot(
      'module'
    );
    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work from "node_modules"', async () => {
    const compiler = getCompiler('from-node_modules.js');
    const stats = await compile(compiler);

    expect(
      getModuleSource('./node_modules/package/index.node', stats)
    ).toMatchSnapshot('module');
    expect(
      execute(
        readAsset('main.bundle.js', compiler, stats),
        path.resolve(__dirname, './fixtures/node_modules/package')
      )
    ).toMatchSnapshot('result');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should throw an error on broken "node" addon', async () => {
    const compiler = getCompiler('broken.js');
    const stats = await compile(compiler);

    expect(getModuleSource('./broken.node', stats)).toMatchSnapshot('module');

    let error;

    try {
      execute(readAsset('main.bundle.js', compiler, stats));
    } catch (nodeLoaderError) {
      error = nodeLoaderError.message
        .replace(new RegExp(process.cwd(), 'g'), '/absolute/path/to')
        .replace(/\\/g, '/');
    }

    expect(error).toMatchSnapshot('result');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });
});