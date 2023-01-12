import User from "./models/user";

function hello(name = "Wilson4") {
  return `Hello, ${name}`;
}

export { hello, User };