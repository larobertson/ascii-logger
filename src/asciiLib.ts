// const bat = (): string => {
  
// }

const owl = (): Array<string> => {
  const owlBlocks: string[] = [
    " /\\_/\\ ",
    "((@v@))",
    "():::()",
    " VV-VV ",
  ];
  return owlBlocks;
};

const eagle = (): Array<string> => {
  const eagleBlocks: string[] = [
    "     .---.        .-----------",
    "    /     \  __  /    ------",
    "  / /     \(  )/    -----",
    " //////   ' \/ `   ---",
    "//// / // :    : ---",
    "// /   /  /`    '--",
    "//          //..\\",
    "      ====UU====UU====",
    "          '//||\\`",
    "            ''``",
    "      Daron Brewood",
  ];
  return eagleBlocks;
};

export const asciiLib = {
  owl,
  eagle,
};


