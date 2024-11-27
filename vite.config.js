import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/traffic-sign-test/', // GitHub Pages의 repository 이름으로 다시 변경
    plugins: [react()],
    build: {
        assetsDir: 'assets',
    },
    esbuild: {
        loader: 'jsx',
        include: /\.[jt]sx?$/,
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
});
