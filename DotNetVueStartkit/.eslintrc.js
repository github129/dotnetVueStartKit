module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, // Allow import of devDependencies
      optionalDependencies: false,
    }],
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
  },
  env: {
    node: true,
    browser: true
  },
}

