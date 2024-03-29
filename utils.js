const log = (message) => {
  const d = new Date();
  const timestamp = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  console.log(`${timestamp}: ${message}`);
};

export { log };