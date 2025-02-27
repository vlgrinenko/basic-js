const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`(  )`);
    } else {
      this.chain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const joinChain = this.chain.join('~~');
    this.chain = [];

    return joinChain;
  },
};

module.exports = {
  chainMaker,
};
