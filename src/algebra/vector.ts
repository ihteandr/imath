import { Matrix } from './matrix';
import { fixNumber } from './utils';

export class Vector {
  cords: Array<number>;
  constructor(cords) {
    this.cords = cords;
  }
  static mixedProduct(...vectorsArgs: Array<Vector | Array<number>>): number {
    const vectors: Vector[] = vectorsArgs.map((vector) => {
      if (Array.isArray(vector)) {
        return new Vector(vector);
      }
      return vector;
    });
    if (vectors.length !== vectors[0].cords.length) {
      throw new Error('Vector: can\'t calculate mixed product')
    }
    const data = [];
    for (let i = 0; i < vectors.length; i++) {
      const vector = vectors[i];
      data.push(vector.cords);
    }
    return new Matrix(data).det();
  }
  static crossProduct(...vectorsArgs: Array<Vector | Array<number>>): Vector {
    const vectors: Vector[] = vectorsArgs.map((vector) => {
      if (Array.isArray(vector)) {
        return new Vector(vector);
      }
      return vector;
    });
    if (vectors.length + 1 !== vectors[0].cords.length) {
      throw new Error('Vector: can\'t calculate cross product, fix vectors');
    }
    const crossProduct = [];
    const len = vectors[0].cords.length;
    for (let i = 0; i < len; i++) {
      const data = [];
      for (let j = 0; j < vectors.length; j++) {
        const vector = vectors[j];
        const row = vector.cords.slice(0, i).concat(vector.cords.slice(i + 1));
        data.push(row);
      }
      const matrix = new Matrix(data);
      if (!matrix.isSquare()) {
        throw new Error('Vector: can\'t calculate cross product, generated matrix is not square');
      }
      crossProduct.push(fixNumber(((-1) ** i) * matrix.det()));
    }
    return new Vector(crossProduct)
  }
  static getCosAngle (vector1: Vector | Array<number>, vector2: Vector | Array<number>): number {
    if (Array.isArray(vector1)) {
      vector1 = new Vector(vector1);
    }
    if (Array.isArray(vector2)) {
      vector2 = new Vector(vector2);
    }
    return fixNumber(Vector.multiply(vector1, vector2) / (vector1.magnitude() * vector2.magnitude()));
  }
  static multiply (vector1: Vector | Array<number>, vector2: Vector | Array<number>): number {
    if (Array.isArray(vector1)) {
      vector1 = new Vector(vector1);
    }
    if (Array.isArray(vector2)) {
      vector2 = new Vector(vector2);
    }
    let sum = 0;
    for (let i = 0; i < vector1.cords.length; i++) {
      sum += vector1.cords[i]*vector2.cords[i];
    }
    return fixNumber(sum);
  }
  static add(...vectors): Vector {
    const cords = vectors.reduce((total, vector) => {
      for (let i = 0; i < vector.cords.length; i++) {
        total[i] += vector.cords[i];
      }
      return total;
    }, new Array(vectors[0].cords.length).fill(0)).map(fixNumber);
    return new Vector(cords);
  }
  static isCollinear(vector1: Vector | Array<number>, vector2: Vector | Array<number>): boolean {
    if (Array.isArray(vector1)) {
      vector1 = new Vector(vector1);
    }
    if (Array.isArray(vector2)) {
      vector2 = new Vector(vector2);
    }
    let c;
    for (let i = 0; i < vector1.cords.length; i++) {
      if (vector1.cords[i] === 0 && vector2.cords[i] === 0) continue;
      if (c === undefined) {
        c = fixNumber(vector1.cords[i]/vector2.cords[i]);
        continue;
      }
      const temp = fixNumber(vector1.cords[i]/vector2.cords[i]);
      if (c !== temp) {
        return false;
      }
      c = temp;
    }
    return true;
  }
  static decomposition(vector, basis): Array<any> {
    if (Array.isArray(vector)) {
      vector = new Vector(vector);
    }
    const data = basis.map((vector) => new Array(vector.length));
    for (let i = 0; i < basis.length; i++) {
      for (let j = 0; j < basis[i].length; j++) {
        data[j][i] = basis[i][j]
      }
    }
    const matrix = new Matrix(data);
    return matrix.solveAsEquation(vector.cords);
  }
  decomposition(basis): Array<any> {
    return Vector.decomposition(this, basis);
  }
  multiplyScalar (c: number): Vector {
    const cords = this.cords.map((cord) => fixNumber(cord * c));
    return new Vector(cords);
  }
  multiply (vector: Vector | Array<number>): number {
    return Vector.multiply(this, vector);
  }
  add(...vectors: Array<Vector>): Vector {
    return Vector.add(this, ...vectors);
  }
  magnitude (): number {
    let sum = 0;
    for (let i = 0; i < this.cords.length; i++) {
      sum += this.cords[i] * this.cords[i];
    }
    return fixNumber(Math.sqrt(sum));
  }
  getCosAngle (vector: Vector | Array<number>): number {
    return Vector.getCosAngle(this, vector);
  }
  crossProduct(...vectors: Vector[]): Vector {
    return Vector.crossProduct(this, ...vectors);
  }
}
