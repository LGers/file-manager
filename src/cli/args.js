export const parseArgs = () => {
  const args = [];

  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].startsWith('--')) {
      const arr = process.argv[i].split('=');
      const arg = { [arr[0].slice(2)]: arr[1] };
      args.push(arg);
      i++;
    }
  }

  return args;
};
