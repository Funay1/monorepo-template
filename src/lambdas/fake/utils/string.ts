class StringHelper {
    static isValidVariable(variable: any): boolean {
        if (!variable || variable === '') return false;
        return true;
    }
}

export { StringHelper };
