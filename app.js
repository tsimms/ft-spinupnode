import container from './container.js';

const server = await container({
    staticFiles: [
        ''
    ]
});
const { webcontainerInstance } = server;
