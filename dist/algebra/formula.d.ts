export declare class Formula {
    variables: Array<string>;
    func: Function;
    constructor(info: any);
    calc(variablesObject: any): any;
}
