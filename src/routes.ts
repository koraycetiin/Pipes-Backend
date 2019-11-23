import { Express } from "express";
import PipesController from "./controllers/pipeController";
import { API_BASE } from "./enums/constant";
export class Routes {
    public routes(app: Express): void {
        app.get(API_BASE + "rooms", PipesController.getRooms);
        app.get(API_BASE + "pipes", PipesController.getPipes);
        app.get(API_BASE + "pipe", PipesController.getPipeInfo);
    }
}
