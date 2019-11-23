export interface PressureDataEvent {
    userId: string;
    pipeId: string;
    roomName: string;
    pressure: number;
    date: Date;
}
