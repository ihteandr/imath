import { Matrix } from './matrix';

export class Vector {
  cords: Array<number>;
  constructor(cords) {
    this.cords = cords;
  }
  static decomposition(vector, basis) {
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
  decomposition(basis) {
    return Vector.decomposition(this, basis);
  }
}
