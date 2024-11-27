// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './', // 이 부분을 변경
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
