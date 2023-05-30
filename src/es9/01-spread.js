const user ={ username: "Santi", age: 30, country : 'CO' };
const{username,...values} = user;
console.log(username);
console.log(values);