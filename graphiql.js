/* eslint-disable @typescript-eslint/no-var-requires */
const exec = require('child_process').exec;
const os = require('os');

const getOpen = platform => {
  switch (platform) {
    case 'darwin':
      return 'open';
    case 'win32':
      return 'start';
    default:
      if (os.release().toLowerCase().includes('wsl')) {
        return 'wslview';
      }

      return 'xdg-open';
  }
};

const accessToken = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
const graphiqlLink = `https://cda-explorer.datocms.com/?apitoken=${accessToken}`;
const openCommand = getOpen(process.platform);

exec(`${openCommand} ${graphiqlLink}`, error => {
  if (error) {
    throw new Error(error);
  }
});
