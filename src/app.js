import { parseArgs } from './cli/args.js';
import * as os from 'os';
import { exitApp, printCurrentDirectory, printError, printMessage } from './utils.js';
import { EXIT } from './commands.js';
import { FgGreen, Reset } from './colors.js';


export const app = () => {
  const args = parseArgs();
  const username = args.find((item) => item.hasOwnProperty('username')).username;

  let currentDirname = os.homedir();
  printMessage(`Welcome to the File Manager, ${FgGreen}${username}${Reset}!\n`);
  printCurrentDirectory(currentDirname);

  process.stdin.on('data', (data) => {
    const command = data.toString().trim();
    if (command === EXIT) {
      exitApp(username);
    }
    printError();
    printCurrentDirectory(currentDirname);
  });

  process.on('SIGINT', () => {
    exitApp(username);
  });
};
