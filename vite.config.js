import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/traffic-sign-test/',
    plugins: [react()],
    build: {
        assetsDir: 'assets',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
});
