/**
 * @jest-environment node
 */

import os from 'os';

import {
  compile,
  execute,
  getCompiler,
  getErrors,
  getModuleSource,
  getWarnings,
  readAsset,
} from './helpers';

describe('"flags" option', () => {
  it.only('should work', async () => {
    const compiler = getCompiler('simple.js', {
      flags: os.constants.dlopen.RTLD_NOW,
    });
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
});
