import * as mongoose from "mongoose";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./enums/constant";
mongoose.set('useFindAndModify', false);
export const mongoUri = 'mongodb://' + DB_USER + ':' + DB_PASS + '@'
    + DB_HOST + ':' + DB_PORT + '/' + DB_NAME;

mongoose.connect(mongoUri, {useNewUrlParser: true}, async function (err) {
    if (err) {
        console.error('Error connecting to database: ' + JSON.stringify(err));
        return process.exit(1);
    }
    console.info(`Successfully connected to ${mongoUri}`);
});

