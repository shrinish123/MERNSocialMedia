const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://socialmediashrinish.netlify.app/";


module.exports = baseUrl;