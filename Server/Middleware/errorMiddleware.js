const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };

// The notFound middleware is responsible for handling requests for routes that are not found, setting the appropriate HTTP status code(404) and passing an error object to the next middleware for error handling.
// The errorHandler middleware is responsible for handling and responding to errors that occur during request processing, setting the appropriate HTTP status code and sending a JSON response with the error message
// 500 - Internal server error
