import {Configs} from '@/Configs';
import {AppDataSource} from '@/typeorm';

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await AppDataSource.initialize();
        console.log("Database initialized")
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error);
        process.exit(1);
    }
}

(async function init() {
    await assertDatabaseConnectionOk();
    console.log(`Starting typeorm on port ${Configs.EXPRESS_PORT}...`);
})()
