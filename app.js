import container from './container.js';

const server = await container({
  staticFiles: [
    'https://raw.githubusercontent.com/tsimms/ft-spinupnode/init/server/server_hello.js',
    'https://raw.githubusercontent.com/tsimms/ft-spinupnode/init/server/server_chat.js',
    'https://raw.githubusercontent.com/tsimms/ft-spinupnode/init/server/client_chat.html',
    'https://raw.githubusercontent.com/tsimms/ft-spinupnode/init/server/package.json'
  ]
});
const { webcontainerInstance } = server;
