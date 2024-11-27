import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './', // './'로 수정
    plugins: [react()],
    build: {
        assetsDir: 'assets',
    },
});
