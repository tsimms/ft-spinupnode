import container from './container.js';

const server = await container({
    staticFiles: [
        'https://raw.githubusercontent.com/tsimms/ft-spinupnode/init/server/server.js',
        'https://raw.githubusercontent.com/tsimms/ft-spinupnode/init/server/package.json'
    ]
});
const { webcontainerInstance } = server;
