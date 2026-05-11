const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

// Carrega as configurações do arquivo .env.dev
dotenv.config({
    path: path.resolve(__dirname, './.env.dev')
})

const e2e = {
    baseUrl: process.env.BASE_URL,
    env: {
        username: process.env.USER,
        password: process.env.PASSWORD
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})