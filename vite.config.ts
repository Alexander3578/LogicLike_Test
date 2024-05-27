import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

import * as path from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
  }
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import * as path from 'path';
//
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "@/styles/index.scss";`,
//       },
//     },
//   },
// });
