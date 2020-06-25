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
  it.skip('should work', async () => {
    const compiler = getCompiler('simple.js', {
      flags: os.constants.dlopen.RTLD_LAZY,
    });
    const stats = await compile(compiler);

    expect(
      getModuleSource('./example/build/Release/hello.node', stats)
    ).toMatchSnapshot('module');
    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });
});
