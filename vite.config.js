import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        cart: 'cart.html',
        signInUp: 'signInUp.html',
        // Add paths to other HTML files here
      }
    }
  }
});

