export declare class Matrix {
    data: Array<Array<number>>;
    trusted: boolean;
    constructor(data: any, trusted?: boolean);
    static _getCellValue(cell: any, variablesObject?: any): any;
    static variablesDet(data: any): (...args: any[]) => any;
    static multiply(matrixA: any, matrixB: any): Matrix;
    static add(matrixA: any, matrixB: any): Matrix;
    add(matrixB: any): void;
    multiply(matrixB: any): void;
    getData(): number[][];
    getColumnSize(): number;
    getRowSize(): number;
    isSquare(): boolean;
    det(variablesObject: any): any;
    solveAsEquation(b: any, variablesObject?: any): any[];
}
