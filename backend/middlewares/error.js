class ErrorHandler  extends Error{
    constructor(message, statusCode){
        // this.message = message;
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res,next) =>{
    
    const statusCode = err.statusCode || 500; 
    const message = err.message || "Internal Serber Error";
    
    if( err.name === "ValidationError"){
        const messages = Object.values(err.errors).map(value => value.message);
        return next(new ErrorHandler(messages.join(", "), 400));
    };

    if (err.name === "CastError"){
        const message = `Resource not found. Invalid: ${err.path}`;
        return next(new ErrorHandler(message, 400));
    };

    return res,status(statusCode).json({
        success: false,
        message : message,
        statusCode : statusCode,
    }) ;
};

export default ErrorHandler;