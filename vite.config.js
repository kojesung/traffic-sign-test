import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/traffic-sign-test/',
    plugins: [react()],
    build: {
        outDir: './', // 루트 디렉토리에 빌드
        assetsDir: 'assets', // 에셋 파일 디렉토리
    },
});
