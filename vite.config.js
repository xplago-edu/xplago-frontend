import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, 'shop/index.html'),
                sale: resolve(__dirname, 'sale/index.html'),
                blog: resolve(__dirname, 'blog/index.html'),
            },
        },
    },
    server: {
        host: true
    }
})