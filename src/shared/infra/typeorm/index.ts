import { Connection, createConnection, getConnectionOptions } from "typeorm";

// Codigo para container-app conectar no container-db

// interface IOptions {
//     host: string;
// }

// getConnectionOptions().then((options) => {
//     const newOptions = options as IOptions;
//     newOptions.host = "database_ignite"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//     createConnection({
//         ...options,
//     });
// });

// Termino do código para container-app conectar no container-db

export default async (host = "database"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOptions, {
            host,
        })
    );
};
