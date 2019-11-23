import * as mongoose from "mongoose";
import { Schema, Types } from "mongoose";

export interface IUser extends mongoose.Document {
    userId: Types.ObjectId;
    rooms: Room[];
}

interface Room {
    name: string;
    pipes: Pipe[];
}

interface Pipe {
    pipeId: string;
    data: Pressure[];
}

interface Pressure {
    date: Date;
    pressure: number;
}

export const userSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    rooms: Object
});

export const User = mongoose.model<IUser>("user", userSchema);

userSchema.set("toJSON", {
    transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
});
