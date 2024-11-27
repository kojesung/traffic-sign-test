import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/traffic-sign-test/', // 다시 원래 경로로
    plugins: [react()],
    build: {
        assetsDir: 'assets',
    },
});
