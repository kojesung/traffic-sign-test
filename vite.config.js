import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './', // 상대 경로로 변경
    plugins: [react()],
    build: {
        outDir: 'dist', // dist 폴더에 빌드
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                // 에셋 파일 이름 형식 지정
                assetFileNames: 'assets/[name][extname]',
                // 청크 파일 이름 형식 지정
                chunkFileNames: 'assets/[name].js',
                // 메인 엔트리 파일 이름 형식 지정
                entryFileNames: 'assets/[name].js',
            },
        },
    },
});
