import { FgCyan, FgGreen, FgRed, Reset } from './colors.js';

export const printMessage = (message) => {
  process.stdout.write(message);
};

export const resetColor = () => {
  printMessage(Reset);
  return Reset;
};

const START_SEPARATOR = `${FgCyan}> ${resetColor()}`;

export const exitApp = (username) => {
  printMessage(`\nThank you for using File Manager, ${FgGreen}${username}${Reset}, goodbye!\n`);
  process.exit(0);
};

export const printCurrentDirectory = (dir) => {
  printMessage(`You are currently in ${FgRed}${dir}\\\n${START_SEPARATOR}`);
  resetColor();
};

export const printError = (message) => {
  printMessage(FgRed);
  if (message) {
    printMessage(`Invalid input: ${Reset} ${message}\n`);
  } else {
    printMessage(`Invalid input...\n`);
  }
  resetColor();
};
