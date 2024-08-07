import { config } from 'dotenv';
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv(
        '.env', // Path to .env file (this is the default)
    )
  ]
};