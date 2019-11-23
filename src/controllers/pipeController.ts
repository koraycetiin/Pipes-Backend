import { User } from "../models/user";
import { Status } from "../models/status";
import {Types} from "mongoose";

class PipesController {
    getRooms = async (req: any, res: any): Promise<void> => {
        const userId = Types.ObjectId(req.body.userId);
        const user = await User.findOne({userId: userId});
        const rooms = [];
        user.rooms.forEach(room => rooms.push(room.name));
        res.send({
            status: Status.success(),
            rooms: rooms
        });
    };

    getPipes = async (req: any, res: any): Promise<void> => {
        const userId = Types.ObjectId(req.query.userId);
        const roomName = req.query.roomName;
        const user = await User.findOne({userId: userId});
        const pipes = [];
        user.rooms.forEach(room => {
            if(room.name === roomName){
                room.pipes.forEach(pipe => pipes.push(pipe.pipeId));
            }
        });
        res.send({
            status: Status.success(),
            pipes: pipes
        });
    };

    getPipeInfo = async (req: any, res: any): Promise<void> => {
        const userId = Types.ObjectId(req.query.userId);
        const roomName = req.query.roomName;
        const pipeId = req.query.pipeName;
        const user = await User.findOne({userId: userId});
        user.rooms.forEach(room => {
            if(room.name === roomName){
                room.pipes.forEach(pipe => {
                    if(pipe.pipeId === pipeId){
                        res.send({
                            status: Status.success(),
                            data: pipe.data
                        });
                    }
                });
            }
        });
    };

}

export default new PipesController();
