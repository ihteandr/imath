import { Formula } from './formula';

export class Matrix {
    constructor(data) {
        this.data = data;
    }
    static isSquare(data) {
        for (let i = 0; i < data.length; i++) {
            if (data.length !== data[i].length) {
                return false;
            }
        }
        return true;
    }
    static _getCellValue(cell, variablesObject) {
        let a = cell;
        if (typeof a === 'string') {
            if (variablesObject) {
                a = variablesObject[a];
                if (!a) {
                    throw new Error(`matrix with undefined variable ${a}`);
                }
            } else {
                throw new Error(`matrix with undefined variable ${a}`);
            }
        }
        if (a instanceof Formula) {
            a = a.calc(variablesObject);
        }
        return a;
    }
    static det(data, variablesObject) {
        if (data.length === 1 && data[0].length === 1) {
            return Matrix._getCellValue(data[0][0], variablesObject);
        }
        let det = 0;
        for (let i = 0; i < data.length; i++) {
            const minor = data.slice(0, i).concat(data.slice(i + 1)).map(row => row.slice(1));
            const value = Matrix._getCellValue(data[i][0], variablesObject);
            det += ((-1) ** (i + 2)) * (value * Matrix.det(minor, variablesObject));
        }
        return det;
    }
    static variablesDet(data) {
        const variables = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                if (typeof data[i][j] === 'string') {
                    if (!variables.includes(data[i][j])) {
                        variables.push(data[i][j]);
                    }
                }
            }
        }
        return (...args) => {
            const variablesObject = {};
            variables.forEach((variable, index) => {
                variablesObject[variable] = args[index];
            });
            return Matrix.det(data, variablesObject);
        };
    }
}
