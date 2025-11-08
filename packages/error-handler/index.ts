export class AppError extends Error {
  public readonly statusCode: Number;
  public readonly isOperational: Boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: Number,
    isOperational = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;

    Error.captureStackTrace(this);
  }
}

// Not found:

export class NotFoundError extends AppError {
  constructor(message = "Resource not found!") {
    super(message, 404);
  }
}

// validation error:

export class ValidationError extends AppError {
  constructor(message = "Validation error", details?: any) {
    super(message, 400, true, details);
  }
}

// Auth Error:

export class AuthError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

// Forbidden Error:

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden access") {
    super(message, 403);
  }
}

// Database Error:

export class DatabaseError extends AppError {
  constructor(message = "Database error", details?: any) {
    super(message, 500, true, details);
  }
}

// Rate Limit Error:

export class RateLimitError extends AppError {
  constructor(message = "Too many requests, please try again later") {
    super(message, 429);
  }
}
