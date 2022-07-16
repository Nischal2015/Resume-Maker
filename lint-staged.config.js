module.exports = {
  '*.{ts,tsx,css}': ['prettier . --write'],
  '*.{ts,tsx}': [
    'prettier --write',
    'eslint . --cache --fix --ext .tsx --ext .ts',
    // () => "yarn tsc",
    // () => "yarn jest",
  ],
};
