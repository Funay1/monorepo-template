interface IRead<T> {
    findById: (id: string) => Promise<any>;
}

export { IRead };
