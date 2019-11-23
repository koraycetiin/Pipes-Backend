import * as io from "socket.io-client";
import { PressureEventName } from "../enums/pressureEventName";
import { PressureDataEvent } from "../models/pressureDataEvent";
import {PRESSURE_LISTENER_URL} from "../enums/constant";

export class PressureListenerClient {
    static socket: io.Socket;

    static initialize() {
        this.socket = io.connect(PRESSURE_LISTENER_URL, {
            reconnection: true,
        });
        module.exports.socket = this.socket;
        this.registerEventHandlers(this.socket);
    }

    static registerEventHandlers(socket) {
        socket.on("connect", function() {
            socket.on(PressureEventName.addData, function(event: PressureDataEvent) {
            });
        });

        socket.on("disconnect", function() {
        });
    }

}
