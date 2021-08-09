import { Formula, Matrix } from "../src/algebra";

describe('Algebra:Matrix', () => {
  it('multiply', () => {
    const items = [
      {
        dataA: [
          [1, 2],
          [3, 4],
        ],
        dataB: [
          [2, 3, 3],
          [2, 3, 3],
        ],
      },
    ];
    items.forEach((item) => {
      expect(Matrix.multiply(new Matrix(item.dataA), new Matrix(item.dataB)).data).toEqual([[6, 9, 9], [14, 21, 21]]);
    });
  });
  it('add', () => {
    const items = [
      {
        dataA: [
          [1, 2],
          [3, 4],
        ],
        dataB: [
          [2, 3],
          [2, 3],
        ],
      },
    ];
    items.forEach((item) => {
      expect(Matrix.add(new Matrix(item.dataA), new Matrix(item.dataB)).data).toEqual([[3, 5], [5, 7]]);
    });
  });
  it('det', () => {
    const items = [
      {
        data: [
          [5, 2],
          [7, 3],
        ],
        answer: 1,
      },
      {
        data: [
          [1, 2],
          [3, 4],
        ],
        answer: -2,
      },
      {
        data: [
          [3, 2],
          [8, 5],
        ],
        answer: -1,
      },
      {
        data: [
          [6, 9],
          [8, 12],
        ],
        answer: 0,
      },
      {
        data: [
          [2, 1, 3],
          [5, 3, 2],
          [1, 4, 3],
        ],
        answer: 40,
      },
    ];
    items.forEach((item) => {
      const matrix = new Matrix(item.data);
      expect(matrix.det()).toBe(item.answer);
    });
  });

  it('varaiablesDet', () => {
    const data = [
      ['a', 'c'],
      ['b', 'd'],
    ];
    const variablesDet = Matrix.variablesDet(data);
    const matrix = new Matrix(data);
    const items = [
      {
        varaibales: {
          a: 5,
          c: 2,
          b: 7,
          d: 3,
        },
        answer: 1,
      },
      {
        varaibales: {
          a: 1,
          c: 2,
          b: 3,
          d: 4,
        },
        answer: -2,
      },
      {
        varaibales: {
          a: 3,
          c: 2,
          b: 8,
          d: 5,
        },
        answer: -1,
      },
      {

        varaibales: {
          a: 6,
          c: 9,
          b: 8,
          d: 12,
        },
        answer: 0,
      },
    ];
    items.forEach((item) => {
      expect(matrix.det(item.varaibales)).toBe(item.answer);
      expect(variablesDet(item.varaibales)).toBe(item.answer);
    });
  });

  it('varaiablesDet:formula', () => {
    const formula = new Formula(['a', 'b', 'c', (a, b, c) => a + b + c]);

    const data = [
      ['a', 'c'],
      ['b', formula],
    ];
    const matrix = new Matrix(data);

    const variablesDet = Matrix.variablesDet(data);

    const items = [
      {
        varaibales: {
          a: 5,
          c: 2,
          b: 7,
        },
        answer: 56,
      },
      {
        varaibales: {
          a: 1,
          c: 2,
          b: 3,
        },
        answer: 0,
      },
      {
        varaibales: {
          a: 3,
          c: 2,
          b: 8,
        },
        answer: 23,
      },
      {
        varaibales: {
          a: 6,
          c: 9,
          b: 8,
        },
        answer: 66,
      },
    ];
    items.forEach((item) => {
      expect(matrix.det(item.varaibales)).toBe(item.answer);
      expect(variablesDet(item.varaibales)).toBe(item.answer);
    });
  });

  it('solve', () => {
    const equations = [
      {
        data: [
          [2],
          [2, 3],
        ],
        b: [],
        answer: [],
      },
      {
        data: [
          [2],
        ],
        b: [4],
        answer: [2],
      },
      {
        data: [
          [2, 5],
          [3, 7],
        ],
        b: [1, 2],
        answer: [3, -1],
      },
      {
        data: [
          [1, 1],
          [2, 2],
        ],
        b: [1, 1],
        answer: [],
      },
      {
        data: [
          [5, -7],
          [1, -2],
        ],
        b: [1, 0],
        answer: [2 / 3, 1 / 3],
      },
    ];
    equations.forEach((equation) => {
      const matrix = new Matrix(equation.data);
      expect(matrix.solveAsEquation(equation.b)).toEqual(equation.answer);
    });
  });
});