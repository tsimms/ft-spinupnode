import container from './container.js';

const branch = 'main';

(async () => {
  const branchUrl = `https://raw.githubusercontent.com/tsimms/ft-spinupnode${branch ? `/${branch}` : ''}`;
  const server = await container({
    staticFiles: [
      `${branchUrl}/server/server_hello.js`,
      `${branchUrl}/server/server_chat.js`,
      `${branchUrl}/server/client_chat.html`,
      `${branchUrl}/server/client_chat.js`,
      `${branchUrl}/server/package.json`
    ]
  });
  const { webcontainerInstance, serverUrl } = server;
//  document.getElementById('chat-frame').innerHTML = `<iframe src="${serverUrl}"></iframe>`;
})()

