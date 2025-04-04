module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off', 
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
  },
};
