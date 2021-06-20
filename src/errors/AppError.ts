export class AppError {
    public readonly message: string;

    public readonly statusCode: number;

    constructor(messagem: string, statusCode){
        this.message = messagem;
        this.statusCode = statusCode;
    }
}
