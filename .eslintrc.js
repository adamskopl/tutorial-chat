module.exports = {
  'extends': 'airbnb-base',
  'rules': {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', 80],
    'no-use-before-define': 'off',
    'no-console': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-rest-params': 'off',
    'function-paren-newline': ['error', 'consistent']
  },
  'globals': {
    'window': true,
    'Vue': true,
    'io': true
  },
  'plugins': [
    'import'
  ]
};
