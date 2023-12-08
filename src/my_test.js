class DepthCalculator {
  constructor() {
    this.depth = 1;
  }

  calculateDepth(arr) {
    let currentDepth = this.depth;

    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        const insideDepth = this.calculateDepth(arr[i]) + 1;

        currentDepth = currentDepth > insideDepth ? currentDepth : insideDepth;
      }
    }

    this.depth = 1;

    return currentDepth;
  }
}

const depthCalc = new DepthCalculator();
const xxx = depthCalc.calculateDepth([
  1,
  2,
  3,
  4,
  [1, [2, [3, [4, [5, [6, [7, [8]]]]]]]],
  [1, 2, [1, 2, [3, [4, [5]]]]],
  5,
  [1, [2, [3, [4, [5, [6, [7]]]]]]],
]);

console.log(xxx);
// output: 8
