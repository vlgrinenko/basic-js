const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
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

module.exports = {
  VigenereCipheringMachine,
};
