require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

console.log(user);
console.log(password);
