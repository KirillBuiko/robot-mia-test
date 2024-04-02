import express from '@/api';
import {Configs} from '@/configs';
import {AppDataSource} from '@/typeorm';
import {prodDBController} from "@/db-controller/prod";

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
    console.log(`Starting TypeORM + Express on port ${Configs.EXPRESS_PORT}...`);

    express(prodDBController).listen(Configs.EXPRESS_PORT, () => {
        console.log(`Express server started on ${Configs.HOST}:${Configs.EXPRESS_PORT}.`);
    });
})()
