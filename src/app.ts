import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import { Express } from "express-serve-static-core";
const db = require("./db");

class App {
    public app: Express;
    public routes: Routes = new Routes();
    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
