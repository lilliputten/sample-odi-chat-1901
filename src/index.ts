import { Core } from 'odi';
import { join } from 'path';

new Core({
  sources: __dirname,
  server: {
    port: 8080,
    socket: true,
    static: {
      root: join(__dirname, '../assets'),
      prefix: '/assets',
    },
  },
}).listen(() => {
  console.log('Server successfully started!');
});
