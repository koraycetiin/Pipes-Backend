export class Status {
    success: boolean;
    reason: string;

    constructor(success: boolean, reason: string) {
        this.success = success;
        this.reason = reason;
    }

    static success() {
        return new Status(true, "");
    }

    static failure(error: string) {
        return new Status(false, error);
    }
}
