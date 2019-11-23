import * as http from "http";
import * as https from "https";
import app from "./app";
import { PressureListenerClient } from "./services/pressureListenerClient";
import { PORT } from "./enums/constant";

export let server: https.Server | http.Server;
this.server = createServer();

export function createServer(): http.Server | https.Server {
    let server: http.Server | https.Server;
    server = http.createServer(app).listen(PORT);
    server.on("listening", () => {
        console.log("Express server listening on port: " + PORT);
        PressureListenerClient.initialize();
    });
    return server;
}
