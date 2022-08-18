const magic = () => {
  return new Date();
};

// const magic = () => new Date();
// No need for return statement since arrow function has an implicit return

console.log(magic());

