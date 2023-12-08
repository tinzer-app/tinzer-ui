module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    () => 'tsc -p tsconfig.json --noEmit',
    'eslint --max-warnings=0',
  ],
};
