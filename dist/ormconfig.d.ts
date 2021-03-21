declare const DB_HOST: string, DB_PORT: string, DB_USER: string, DB_PASS: string, DB_NAME: string;
declare const config: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    synchronize: boolean;
    ssl: {
        rejectUnauthorized: boolean;
    };
};
