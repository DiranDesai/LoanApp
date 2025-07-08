const errorHandler = (err, req, res, next) => {
    console.error(err); // Optional: log for debugging

    res.status(err.statusCode || 500).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
    });
}

export default errorHandler