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

const xxx = chainMaker.addLink(1).addLink(2).addLink(3).finishChain();

console.log(xxx);
// output: '( 2 )~~( 3 )'

console.log([1, 2, 3].length);
