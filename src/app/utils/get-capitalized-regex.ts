export function getCapitalizedRegex(originalString: string): string {
  const words = originalString.split(' ').filter((word) => word);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log('word');
    console.log(word);
    const regex = `[${word.slice(0, 1).toLowerCase()}${word
      .slice(0, 1)
      .toUpperCase()}]${word.slice(1)}`;
    console.log(regex);
    words[i] = regex;
  }
  return words.length > 0 ? words.join(' ') : '';
}
