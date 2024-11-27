// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/traffic-sign-test/',
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // 원본 파일 이름 유지
                    return `assets/${assetInfo.name}`;
                },
            },
        },
    },
});
