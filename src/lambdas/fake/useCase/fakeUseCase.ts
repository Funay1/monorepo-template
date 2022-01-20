import { IFakeUseCase } from './interfaces/FakeUseCase';

class FakeUseCase implements IFakeUseCase {
    execute(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

export default FakeUseCase;
