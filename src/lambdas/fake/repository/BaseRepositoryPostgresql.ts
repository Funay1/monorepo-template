import { EntityTarget, getRepository, Repository } from 'typeorm';
import { IRead } from '../shared/interfaces/database/Read';
import { IWrite } from '../shared/interfaces/database/Write';

class BaseRepositoryPostgres<T> implements IRead<T>, IWrite<T> {
    private ormRepository: Repository<{}>;
    constructor(entity: EntityTarget<T>) {
        this.ormRepository = getRepository<T>(entity);
    }
    async create(item: T): Promise<any> {
        const result = this.ormRepository.create(item);
        return this.ormRepository.save(result);
    }
    async update(_id: string, item: T) {
        return this.ormRepository.update(_id, item);
    }
    async delete(_id: string): Promise<string> {
        await this.ormRepository.delete(_id);
        return '';
    }
    async findById(id: string): Promise<any> {
        return this.ormRepository.findOne(id);
    }
}

export { BaseRepositoryPostgres };
