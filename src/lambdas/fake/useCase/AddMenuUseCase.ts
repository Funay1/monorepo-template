import { MenupostgresqlEntity } from '../entities/postgresql/MenuPostgresqlEntity';
import { BaseRepositoryPostgres } from '../repository/BaseRepositoryPostgresql';
import {
    BadRequestError,
    InternalServerError,
} from '../shared/errors/HttpError';
import { StringHelper } from '../utils/string';
import { IFakeUseCase } from './interfaces/AddMenuUseCase';

class AddMenuUseCase implements IFakeUseCase {
    private repository: BaseRepositoryPostgres<MenupostgresqlEntity>;
    constructor(repository: BaseRepositoryPostgres<MenupostgresqlEntity>) {
        this.repository = repository;
    }

    private isValidMenuParams(menu: MenupostgresqlEntity): boolean {
        return (
            StringHelper.isValidVariable(menu) &&
            StringHelper.isValidVariable(menu.name)
        );
    }
    async execute(menu: MenupostgresqlEntity) {
        if (!this.isValidMenuParams(menu)) {
            console.log('bad params');
            throw new BadRequestError('Invalid Menu params');
        }
        try {
            console.log('chegou aqui')
            const result = await this.repository.create(menu);
            return result;
        } catch (e) {
            console.log(e);
            throw new InternalServerError('Error when try to create an menu');
        }
    }
}

export { AddMenuUseCase };
