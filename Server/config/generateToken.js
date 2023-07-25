import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;

// The { id } is an object containing the id as the value. This payload will be included in the JWT and can be used to identify the user or entity associated with the token.
// The process.env.JWT_SECRET is the secret key used to sign the token. The actual secret value is retrieved from the JWT_SECRET environment variable.
