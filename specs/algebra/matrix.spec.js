const imath = require('../../build/index');

const { algebra } = imath;
const { Matrix, Formula } = algebra;

describe('Algebra:Matrix', () => {
    it('det:2 degree', () => {
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
        ];
        items.forEach((item) => {
            expect(Matrix.det(item.data)).toBe(item.answer);
        });
    });

    it('varaiablesDet:2 degree', () => {
        const data = [
            ['a', 'c'],
            ['b', 'd'],
        ];
        const variablesDet = Matrix.variablesDet(data);

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
            expect(Matrix.det(data, item.varaibales)).toBe(item.answer);
            expect(variablesDet(...Object.values(item.varaibales))).toBe(item.answer);
        });
    });
    
    it('varaiablesDet:formula:2 degree', () => {
        const formula = new Formula(['a', 'b', 'c', (a, b, c) => a + b + c]);
        
        const data = [
            ['a', 'c'],
            ['b', formula],
        ];

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
            expect(Matrix.det(data, item.varaibales)).toBe(item.answer);
            expect(variablesDet(...Object.values(item.varaibales))).toBe(item.answer);
        });
    });

    it('det:3 degree', () => {
    });
});
