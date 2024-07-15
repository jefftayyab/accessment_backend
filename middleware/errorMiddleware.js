const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let error = err.message;

    res.status(statusCode).json({
        success: false,
        error: error
    });
};

module.exports = { notFound, errorHandler }
