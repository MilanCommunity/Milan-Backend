const STATUSCODE = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  CONFLICT: 409,
  GONE: 410,
  PRECONDITION_FAILED: 412,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

const STATUSMESSAGE = {
  LOGIN_SUCCESS: "Logged in !",
  LOGIN_FAILED: "Login failed !",
  LOGOUT_SUCCESS: "Logged out sucessfully !",
  LOGOUT_FAILED: "Logout failed !",
  SIGNUP_SUCCESS: "Signed up, please Login !",
  SIGNUP_FAILED: "Signup failed !",
  USER_NOT_FOUND: "User not found !",
  USER_ALREADY_EXISTS: "User already exists, please Login !",
  INVALID_CREDENTIALS: "Invalid credentials !",
  INTERNAL_SERVER_ERROR: "Internal server error, try again later !",
  UNAUTHORIZED: "Unauthorized !",
  FORBIDDEN: "Forbidden !",
  NOT_FOUND: "Not found !",
  EVENT_SLUG_ALREADY_EXISTS: "Event slug already exists",
  CREATE_EVENT_FAILED: "Failed to create event",
  PRODUCT_SLUG_ALREADY_EXISTS: "productSlug already exists",
  PRODUCT_ADD_FAILED: "Failed to add product",
  PRODUCT_FETCH_FAILED: "Failed to fetch products",
  PRODUCT_NOT_FOUND: "Product not found",
  PASSWORD_UPDATE_SUCCESS: "Password Updated Successfully",
  TOO_MANY_REQUESTS: "You have already reported a problem in the last 2 hours.",
};

module.exports = { STATUSCODE, STATUSMESSAGE };
