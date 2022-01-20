class HttpError {
    readonly status: number;
    readonly message: string;
    constructor({ message, status }: { message: string; status: number }) {
        this.status = status;
        this.message = message;
    }
}

class BadRequestError extends HttpError {
    constructor(message: string) {
        super({ message, status: 400 });
    }
}

class InternalServerError extends HttpError {
    constructor(message: string) {
        super({ message, status: 500 });
    }
}

export { HttpError, BadRequestError, InternalServerError };
