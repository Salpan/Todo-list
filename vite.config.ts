import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            _components: '/src/common/components',
            _consts: '/src/common/consts',
            _types: '/src/common/types',
        },
    },
    plugins: [react()],
});
