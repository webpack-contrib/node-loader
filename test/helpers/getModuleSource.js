export default (name, stats) => {
  const { modules } = stats.toJson({ source: true });
  const module = modules.find((m) => m.name === name);

  let { source } = module;

  if (source) {
    source = source
      .replace(new RegExp(process.cwd(), 'g'), '/absolute/path/to')
      .replace(/\\/g, '/');
  }

  return source;
};
