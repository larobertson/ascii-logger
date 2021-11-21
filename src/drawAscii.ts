const drawAscii = (artBlocks: Array<string>): string => {
  let asciiArt: string = '';
  for (let i = 0; i < artBlocks.length; i++) {
    asciiArt += `${artBlocks[i]}\n`;
  }
  return asciiArt;
};
  
  export const asciiLib = {
    drawAscii,
  };