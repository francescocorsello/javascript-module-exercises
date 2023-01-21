const user = {
  id: 1,
  name: "John",
  age: 25,
};


function getLocal() {

 return JSON.parse(localStorage.getItem("user"))
  
}

console.log(getLocal());