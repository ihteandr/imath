export class Formula {
    constructor(info) {
        this.func = info[info.length - 1];
        this.variables = info.slice(0, info.length - 1);
    }
    calc(variablesObject) {
        const args = this.variables.map(variable => variablesObject[variable]);
        return this.func(...args);
    }
}
