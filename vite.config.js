// vite.config.js
const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                tab: resolve(__dirname, 'tab.html'),
                todo: resolve(__dirname, 'todo.html'),
                configure: resolve(__dirname, 'configure.html')
            }
        }
    }
})
