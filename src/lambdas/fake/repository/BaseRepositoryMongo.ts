import { Document, Model, Types } from 'mongoose';
import { IFakeRepository } from './interfaces/FakeRepository.interface';

class BaseRepositoryMongo<T extends Document> implements IFakeRepository<T> {
    private _model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this._model = schemaModel;
    }

    async create(item: T) {
        await this._model.create(item);
    }

    async retrieve() {
        this._model.find({});
    }

    async update(_id: string, item: T) {
        return this._model.updateOne({ _id: _id }, item);
    }

    async delete(_id: string) {
        await this._model.remove({ _id: this.toObjectId(_id) });
    }

    async findById(_id: string) {
        return this._model.findById(_id);
    }

    private toObjectId(_id: string) {
        return Types.ObjectId.createFromHexString(_id);
    }
}

export { BaseRepositoryMongo };
