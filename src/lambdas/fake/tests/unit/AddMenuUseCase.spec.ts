import { AddMenuUseCase } from '../../useCase/AddMenuUseCase';
import { BaseRepositoryPostgres } from '../../repository/BaseRepositoryPostgresql';
import { Menu } from '../../entities/MenuEntity';
import { MenupostgresqlEntity } from '../../entities/postgresql/MenuPostgresqlEntity';
import { BadRequestError } from '../../shared/errors/HttpError';
import { Repository } from 'typeorm';

let repository: BaseRepositoryPostgres<MenupostgresqlEntity> = {
    create: jest.fn(),
    delete: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
} as any;

describe('When lambda calls service', () => {
    describe('And get an empty menu params', () => {
        it('should returns BadRequestException', async () => {
            const useCase = new AddMenuUseCase(repository);
            try {
                await useCase.execute(new Menu('', null));
            } catch (e) {
                expect(e).toBeInstanceOf(BadRequestError);
            }

            expect.assertions(1);
        });
    });

    describe('And get an empty menu params', () => {
        it('should returns BadRequestException', async () => {
            jest.spyOn(repository, 'create').mockReturnValue(Promise.resolve());
            const useCase = new AddMenuUseCase(repository);
            await useCase.execute(new Menu('batatinha', null));
            expect(repository.create).toBeCalled();
        });
    });
});
