const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, } = process.env;
const config = {
    type: 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    ssl: {
        rejectUnauthorized: false
    }
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map