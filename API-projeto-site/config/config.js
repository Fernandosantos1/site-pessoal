module.exports = {
    // Insira aqui seus dados do banco NA NUVEM AZURE
    production: {
        // altere APENAS username, password, database e host.
        username: 'adminlocal',
        password: 'Carthilu1',
        database: 'site-pessoal-fernando-ads1a',
        host: 'site-pessoal-fernando.database.windows.net',
        dialect: 'mssql',
        xuse_env_variable: 'DATABASE_URL',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 30000,
            connectTimeout: 5000
        }
    },

    // Insira aqui seus dados do banco LOCAL - MySQL Workbench
    dev: {
        // altere APENAS username, password e database.
        username: 'ferbgam',
        password: 'Carthilu1',
        database: 'bd_befit',
        host: '127.0.0.1',
        dialect: 'mysql',
        xuse_env_variable: 'DATABASE_URL',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 30000,
            connectTimeout: 5000
        }
    },
};