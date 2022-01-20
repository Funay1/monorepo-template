interface IFakeUseCase {
    execute(params: unknown): Promise<unknown>;
}

export { IFakeUseCase };
