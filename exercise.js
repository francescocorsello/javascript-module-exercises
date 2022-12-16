function printName(){
    this.helloName = "Hello John";
    function inner(){
        setTimeout(() =>{
            console.log(this.helloName);
        },5000 )       
    }
    return inner;
}

printName()();
