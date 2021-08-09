import { Vector } from "../src/algebra";

describe('Alegebra:Vector', () => {
  it('decomposition', () => {
    const examples = [
      {
        vector: [-2, 0, 9],
        basis: [[0,-1,2], [1,0,-1], [-1, 2, 4]],
        answer: [2, -1, 1]
      },
      {
        vector: [5, -12, -1],
        basis: [[1,-3,0], [1, -1, 1], [0,-1,2]],
        answer: [4,1,-1]
      },
      {
        vector: [0, 2, 4],
        basis: [[3, 1, -1], [0, -3, 1], [1, 1, 1]],
        answer: [-1, 0, 3] 
      }
    ];
    examples.forEach((example) => {
      console.log(new Vector(example.vector).decomposition(example.basis))
      expect(new Vector(example.vector).decomposition(example.basis)).toEqual(example.answer)
    })
  })
})