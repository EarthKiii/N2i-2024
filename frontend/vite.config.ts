import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import 'dotenv/config'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.FRONT_PORT || 8080)
  },
  plugins: [react()],
})
