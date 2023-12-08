class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (
      typeof message !== 'string' ||
      !message ||
      typeof key !== 'string' ||
      !key
    ) {
      throw Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let index = 0;

    for (let i = 0; i < message.length; i += 1) {
      const charMessage = message[i];

      if (this.alphabet.includes(charMessage)) {
        const charKey = key[index % key.length];

        const messageIndex = this.alphabet.indexOf(charMessage);
        const keyIndex = this.alphabet.indexOf(charKey);

        const newIndex = (messageIndex + keyIndex + 26) % 26;

        result += this.alphabet[newIndex];
        index += 1;
      } else {
        result += charMessage;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (
      typeof message !== 'string' ||
      !message ||
      typeof key !== 'string' ||
      !key
    ) {
      throw Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let index = 0;

    for (let i = 0; i < message.length; i += 1) {
      const charMessage = message[i];

      if (this.alphabet.includes(charMessage)) {
        const charKey = key[index % key.length];

        const messageIndex = this.alphabet.indexOf(charMessage);
        const keyIndex = this.alphabet.indexOf(charKey);

        const newIndex = (messageIndex - keyIndex + 26) % 26;

        result += this.alphabet[newIndex];
        index += 1;
      } else {
        result += charMessage;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

const directMachine = new VigenereCipheringMachine();

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
