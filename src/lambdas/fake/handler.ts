import { APIGatewayProxyHandler } from 'aws-lambda';
import { config } from './config/default';
import { AddMenuUseCase } from './useCase/AddMenuUseCase';
import { Connection, createConnections } from 'typeorm';
import { BaseRepositoryPostgres } from './repository/BaseRepositoryPostgresql';
import { MenupostgresqlEntity } from './entities/postgresql/MenuPostgresqlEntity';

MenupostgresqlEntity;

let postgresConnection: Connection[];

const fakeHandler: APIGatewayProxyHandler = async (event) => {
    const { body } = event;
    console.log('aqui', body);
    try {
        if (!postgresConnection)
            postgresConnection = await createConnections([
                config.database.postgress,
            ]);
        const repository = new BaseRepositoryPostgres(MenupostgresqlEntity);
        const useCase = new AddMenuUseCase(repository);

        if (!body)
            return {
                statusCode: 400,
                body: 'Bad Request',
            };
        const parsedBody = JSON.parse(body);
        const result = await useCase.execute(parsedBody);
        console.log('result', result);
    } catch (e) {
        console.log('erro', e);
        return {
            statusCode: e.statusCode || 500,
            body: e.body || 'Internal Server Error',
        };
    }

    return {
        statusCode: 200,
        body: 'Success',
    };
};

export { fakeHandler };
