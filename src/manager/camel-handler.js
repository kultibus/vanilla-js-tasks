export class CamelHandler {
  strings = []
  constructor(...args) {
    args.forEach(arg => {
      this.strings.push([...arg].map(char => {
        if (char.match(/\p{Lu}/u)) return (char = '-' + char.toLowerCase());
        // if (char.match(/\d/)) return (char = '-' + char);
        return char;
      }).join(''))
    })
    return this.strings
  }
}

