class Menu {
    readonly id: string;
    readonly name: string;
    readonly realatedId: string | null;
    constructor(name: string, relatedId: string | null) {
        this.name = name;
        this.realatedId = relatedId;
    }
}

export { Menu };
