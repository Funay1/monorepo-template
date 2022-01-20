import { IWrite } from '../../shared/interfaces/database/Write';
import { IRead } from '../../shared/interfaces/database/Read';


interface IFakeRepository<T> extends IRead<T>, IWrite<T> {}

export { IFakeRepository };
