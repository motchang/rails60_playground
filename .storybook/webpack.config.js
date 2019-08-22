module.exports = ({ config }) => {
  const tsRule = {
    ...config.module.rules[0],
    test: /\.(tsx?)$/,
  }

  return {
    ...config,
    module: {
      rules: [...config.module.rules, tsRule],
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.tsx'],
    },
  }
}
