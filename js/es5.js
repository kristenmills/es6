function varVsLetES5() {
  function fooBar() {
    var bar = 2;
    if(true) {
      var bar = 1;
    }
    return bar;
  }

  document.getElementById("var-es5").innerHTML = fooBar() ;
}

function arrowFunctions1() {
  function FooBar() {
    this.multiplier = 3;
    this.data = [1,2,3].map(function(item){
      return this.multiplier * item;
    });
    document.getElementById("arrow-es5-1").innerHTML = this.data;
  }

  new FooBar();
}

function arrowFunctions2() {
  function FooBar() {
    this.multiplier = 3;
    var other = this;
    this.data = [1,2,3].map(function(item){
      return other.multiplier * item;
    });
    document.getElementById("arrow-es5-2").innerHTML = this.data;
  }

  new FooBar();
}

function templateES5() {
  var sum = 1+1;

  document.getElementById("template-es5").innerHTML =   "1 + 1 = " + sum;
}


function classesES5() {
  function FooBar() {
    this.foo = 1;
    this.bar = 2;
  }

  FooBar.prototype.add = function() {
    return this.foo + this.bar;
  }

  var myFooBar = new FooBar();

  document.getElementById("classes-es5").innerHTML = myFooBar.add();
}

function restES5() {

  function numArgs() {
    return arguments.length;
  }

  function sum(x, y, z) {
    return x + y + z;
  }

  var array = [1,2,3];
  document.getElementById("rest-es5").innerHTML = numArgs(1,2,3) + '<br>' + sum(array[0], array[1], array[2]);

}
