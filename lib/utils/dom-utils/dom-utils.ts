const generateDomID = (prefix?: string): string => {
  const randomNumber = Math.floor(Math.random() * 1000);

  if (!prefix) {
    prefix = '';

    const prefixChars = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];

    // Shuffle the array
    for (let i = prefixChars.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [prefixChars[i], prefixChars[j]] = [prefixChars[j], prefixChars[i]];
    }

    // Take the first 5 characters
    prefix = prefixChars.slice(0, 5).join('');
  }

  const uniqueId = `${prefix}-${Date.now()}-${randomNumber}`;
  return uniqueId;
};

export { generateDomID };
