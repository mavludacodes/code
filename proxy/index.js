console.log("Proxy example");

function isValidEmail(email) {
  const tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  return tester.test(email);
}
function isAllLetters(char) {
  if (typeof char !== "string") {
    return false;
  }

  return /^[a-zA-Z]+$/.test(char);
}

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (obj, prop) => {
    console.log(obj, "user obj"); // in our example obj is user
    console.log(prop, "property name in user obj"); // prop can be age or firstname or email

    return `The value of ${prop} is ${Reflect.get(obj, prop)}`; // return target[property], in our example: return obj[prop]
  },
  set: (obj, prop, value) => {
    console.log(value, "property value we want to set");
    if (prop === "email") {
      if (!isValidEmail(value)) {
        console.log("Please provide a valid email.");
        return false;
      }
    }

    if (prop === "username") {
      if (value.length < 3) {
        throw new Error("Please use a longer username.");
      } else if (!isAllLetters(value)) {
        throw new Error("You can only use letters");
      }
    }

    if (prop === "age") {
      if (typeof value !== "number") {
        throw new Error("Please provide a valid age.");
      }

      if (value < 18) {
        throw "User cannot be younger than 18.";
      }
    }

    return Reflect.set(obj, prop, value); // target[property] = value, in our example: obj[prop] = value
  },
});

console.log(userProxy.age); // The value of age is 42
console.log(user.age); // 42
userProxy.age = 24;
console.log(userProxy.age); // The value of age is 24
console.log(user.age); // 24

/* Proxies make it easy to add functionality
   when interacting with a certain object, 
   such as validation, logging, formatting, notifications, debugging. */

/*
  PS: When we use the set or get operation with a proxy object,
      target object or original object property values can be changed.
      With proxy, we can add functionality.
*/
