import { Formula } from './formula';
import { fixNumber } from './utils';

export class Matrix {
  data: Array<Array<number | Formula | string>>;
  trusted: boolean;
  constructor(data: Array<Array<string | number | Formula>>, trusted = false) {
    this.data = data;
    this.trusted = trusted;
  }
  static _getCellValue(cell, variablesObject: { [k: string]: number } = null) {
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
  static variablesDet(data: Array<Array<string | number | Formula>>) {
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
    const matrix = new Matrix(data);
    return (args: { [k: string]: number }) => {
      const variablesObject = {};
      variables.forEach((variable) => {
        variablesObject[variable] = args[variable];
      });
      return matrix.det(variablesObject);
    };
  }
  static multiply(matrixA: Matrix | Array<Array<number>>, matrixB: Matrix | Array<Array<number>>) {
    if (Array.isArray(matrixA)) {
      matrixA = new Matrix(matrixA);
    }

    if (Array.isArray(matrixB)) {
      matrixB = new Matrix(matrixB);
    }
    const matrixARowSize = matrixA.getRowSize();
    const matrixBColumnSize = matrixB.getColumnSize();
    const matrixBRowSize = matrixB.getRowSize();
    if (matrixARowSize !== matrixBColumnSize) {
      throw new Error('unable to multiply matrixs');
    }
    const matrixCData = [];
    const matrixAData = matrixA.getData();
    const matrixBData = matrixB.getData();
    matrixAData.forEach((row, rowIndex) => {
      matrixCData[rowIndex] = [];
      for (let i = 0; i < matrixBRowSize; i++) {
        const cellValue = row.reduce((sum, cell, cellIndex) => {
          if (typeof cell === 'number' && typeof matrixBData[cellIndex][i] === 'number') {
            //@ts-ignore
            return sum + (cell * matrixBData[cellIndex][i])
          }
          throw new Error('Matrix: try multiply not a number')
        }, 0);
        matrixCData[rowIndex][i] = cellValue;
      }
    });
    return new Matrix(matrixCData);
  }
  static add(matrixA: Matrix | Array<Array<number>>, matrixB: Matrix | Array<Array<number>>) {
    if (Array.isArray(matrixA)) {
      matrixA = new Matrix(matrixA);
    }

    if (Array.isArray(matrixB)) {
      matrixB = new Matrix(matrixB);
    }
    const matrixBColumnSize = matrixB.getColumnSize();
    const matrixBRowSize = matrixB.getRowSize();
    const matrixAColumnSize = matrixA.getColumnSize();
    const matrixARowSize = matrixA.getRowSize();
    if (matrixAColumnSize !== matrixBColumnSize ||
      matrixARowSize !== matrixBRowSize) {
      throw new Error('unable to add matrixs');
    }
    const matrixCData = [];
    const matrixAData = matrixA.getData();
    const matrixBData = matrixB.getData();
    matrixAData.forEach((row, rowIndex) => {
      matrixCData[rowIndex] = [];
      row.forEach((cell, columnIndex) => {
        if (typeof row[columnIndex] === 'number' && typeof matrixBData[rowIndex][columnIndex] === 'number') {
          //@ts-ignore
          matrixCData[rowIndex][columnIndex] = row[columnIndex] + matrixBData[rowIndex][columnIndex];
        } else {
          throw new Error('Matrix: try add not a number')
        }
      });
    });
    return new Matrix(matrixCData);
  }
  add(matrixB: Matrix | Array<Array<number>>) {
    this.data = Matrix.add(this, matrixB).data;
  }
  multiply(matrixB: Matrix | Array<Array<number>>) {
    this.data = Matrix.multiply(this, matrixB).data;
  }
  getData() {
    return this.data;
  }
  getColumnSize() {
    return this.data.length;
  }
  getRowSize() {
    return this.data[0].length;
  }
  isSquare() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data.length !== this.data[i].length) {
        return false;
      }
    }
    return true;
  }
  det(variablesObject: { [k: string]: number } = null) {
    if (!this.trusted) {
      if (!this.isSquare()) {
        throw new Error('Matrix is not a square');
      }
    }
    if (this.data.length === 1 && this.data[0].length === 1) {
      return Matrix._getCellValue(this.data[0][0], variablesObject);
    }
    let det = 0;
    for (let i = 0; i < this.data.length; i++) {
      const minor = this.data.slice(0, i)
        .concat(this.data.slice(i + 1))
        .map(row => row.slice(1));
      const matrix = new Matrix(minor, true);
      const value = Matrix._getCellValue(this.data[i][0], variablesObject);
      det += ((-1) ** i) * (value * matrix.det(variablesObject));
    }
    return fixNumber(det);
  }
  solveAsEquation(b: Array<number | Formula>, variablesObject: { [k: string]: number } = null) {
    const xScore = [];
    if (!this.isSquare()) {
      return xScore;
    }
    const mainDet = this.det(variablesObject);
    if (mainDet === 0) {
      return xScore;
    }
    for (let i = 0; i < this.data.length; i++) {
      const stepData = this.data.map((row, index) => (
        row.slice(0, i).concat([b[index]]).concat(row.slice(i + 1))
      ));
      const stepMatrix = new Matrix(stepData);
      const stepX = fixNumber(stepMatrix.det(variablesObject) / mainDet);
      xScore.push(stepX);
    }
    return xScore;
  }
}
