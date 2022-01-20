import { model, Schema } from 'mongoose';

const FakeMongoSchema = new Schema({
    id: String,
    name: String,
    password: String,
});

const FakeMongoEntity = model('fake', FakeMongoSchema);

export { FakeMongoEntity };
