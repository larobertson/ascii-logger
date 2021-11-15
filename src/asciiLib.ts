// const bat = (): string => {
  
// }

const owl = (): string => {
  const owlBlocks: string[] = [
    " /\\_/\\ ",
    "((@v@))",
    "():::()",
    " VV-VV ",
  ];
  let owlArt: string = '';
  for (let i = 0; i < owlBlocks.length; i++) {
    owlArt += `${owlBlocks[i]}\n`;
  }
  return owlArt;
};

export const asciiLib = {
  owl: owl(),
};
