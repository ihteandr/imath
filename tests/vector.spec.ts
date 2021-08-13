import { fixNumber } from "../src/algebra/utils";
import { Formula, Vector } from "../src/algebra";

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
      expect(new Vector(example.vector).decomposition(example.basis)).toEqual(example.answer)
    })
  });
  it ('isCollinear', () => {
    const formula = new Formula(['a','v1', 'b', 'v2', (a: number, v1: Vector, b: number, v2: Vector) => (
      v1.multiplyScalar(a).add(v2.multiplyScalar(b))
    )]);
    const examples = [
      {
        vectorA: new Vector([1,2,-3]),
        vectorB: new Vector([1,0,-1]), 
        variables1: [3, 6],
        variables2: [-1, 2],
        answer: false
      },
      {
        vectorA: new Vector([1,3,2]),
        vectorB: new Vector([1,-2,6]), 
        variables1: [1, -1],
        variables2: [-6, 6],
        answer: true
      },
      {
        vectorA: new Vector([2,0,1]),
        vectorB: new Vector([-2,3,1]), 
        variables1: [2, 2],
        variables2: [3, -2],
        answer: false
      },
      {
        vectorA: new Vector([-1,-2,2]),
        vectorB: new Vector([1,0,2]), 
        variables1: [1, 3],
        variables2: [-2, -6],
        answer: true
      }
    ];
    examples.forEach((example) => {
      expect(Vector.isCollinear(formula.calc({
        a: example.variables1[0],
        v1: example.vectorA,
        v2: example.vectorB,
        b: example.variables1[1]
      }), formula.calc({
        a: example.variables2[0],
        v1: example.vectorA,
        v2: example.vectorB,
        b: example.variables2[1]
      }))).toBe(example.answer);
    })  
  });
  it ('getCosAngle', () => {
    const examples = [{
      vector1: [-1, 1, -1],
      vector2: [2, -2, 2],
      answer: -1
    }, {
      vector1: [-12, 0, -9],
      vector2: [-9, 0, -12],
      answer: fixNumber(24/25)
    }];
    examples.forEach((example) => {
      expect(Vector.getCosAngle(example.vector1, example.vector2)).toBe(example.answer);
    })
  });
  it('crossProduct: areas test', () => {
    const areasExamples = [{
      vector1: [1, 0, 0],
      vector2: [0, 1, 0],
      answer: 1
    },{
      vector1: [1, 0, 0],
      vector2: [0, -1, 0],
      answer: 1
    }, {
      vector1: [2, 0, 0],
      vector2: [0, 2, 0],
      answer: 4  
    }, {
      vector1: [1, 1, 0],
      vector2: [1, -1, 0],
      answer: 2
    }, {
      vector1: [4, 0, 0],
      vector2: [0, 4, 0],
      answer: 16
    }];
    areasExamples.forEach((example) => {  
      expect(Vector.crossProduct(example.vector1, example.vector2).module()).toBe(example.answer);
    })
  });
  it('crossProduct: value test', () => {
    const examples = [{
      vector1: [2, 3, 4],
      vector2: [5, 6, 7],
      answer: [-3, 6, -3]
    }]
    
    examples.forEach((example) => {
      expect(Vector.crossProduct(example.vector1, example.vector2).cords).toEqual(example.answer);
    })
  })
})