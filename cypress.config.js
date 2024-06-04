import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'zwvgke',
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
  defaultCommandTimeout: 10000,
});
