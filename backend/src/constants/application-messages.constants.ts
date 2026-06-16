export const APPLICATION_MESSAGES = {
  AUTH: {
    INVALID_CREDENTIALS: "Invalid email or password.",
    ACCESS_DENIED: "Access denied.",
    TOKEN_REQUIRED: "Authentication token is required.",
    INVALID_TOKEN: "Invalid or expired token.",
  },

  USER: {
    CREATED: "User created successfully.",
    UPDATED: "User updated successfully.",
    NOT_FOUND: "User not found.",
    EMAIL_ALREADY_EXISTS: "Email already exists.",
  },

  STORE: {
    CREATED: "Store created successfully.",
    UPDATED: "Store updated successfully.",
    NOT_FOUND: "Store not found.",
  },

  RATING: {
    CREATED: "Rating submitted successfully.",
    UPDATED: "Rating updated successfully.",
    NOT_FOUND: "Rating not found.",
  },

  COMMON: {
    VALIDATION_FAILED: "Validation failed.",
    INTERNAL_SERVER_ERROR: "Something went wrong.",
  },
} as const;