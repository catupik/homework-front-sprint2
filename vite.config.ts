// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/homework-front-sprint2/',
  test: {
    globals: true,      // позволяет использовать test/expect без импорта
    environment: 'jsdom' // эмулируем браузер
  }
})
