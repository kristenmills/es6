window.varVsLetES6 = function varVsLetES6() {
   function fooBar() {
    let bar = 2;
    if(true) {
      let bar = 1;
    }
    return bar;
  }

document.getElementById("let-es6").innerHTML = fooBar() ;

}


window.arrowFunctionsES6 = function() {
  function FooBar() {
    this.multiplier = 3;
    this.data = [1,2,3].map((item) => {
      return this.multiplier * item;
    });
    document.getElementById("arrow-es6").innerHTML = this.data;
  }

  const thing = new FooBar();
}


window.classesES6 = function() {
  class FooBar {
    constructor(){
      this.foo = 1;
      this.bar = 2;
    }

    add() {
      return this.foo + this.bar;
    }
  }

  const myFooBar = new FooBar();
  document.getElementById("classes-es6").innerHTML = myFooBar.add();
}

window.restES6 = function() {

  function numArgs(...args) {
    return args.length;
  }

  function sum(x, y, z) {
    return x + y + z;
  }

  var array = [1,2,3];
  document.getElementById("rest-es6").innerHTML = numArgs(1,2,3) + '<br>' + sum(...array);

}

window.templateES6 = function() {
  const sum = 1+1;
  document.getElementById("template-es6").innerHTML = `1 + 1 = ${sum}`;
}
