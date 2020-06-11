var Stack=function(){
this.count = 0;
this.storage={};
//adds value to end of stack
this.push = function(value){
  this.storage[this.count]=value;
  this.count++;
}

//removes value from end of stack
this.pop=function(){
  if(this.count===0){
    return undefined;

  }
  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

//returns no of elements
this.size = function(){
  return this.count;
}

//returns value at the end of the stack
this.peek = function(){
 return this.storage[this.count-1];
}

this.display = function(){
    console.log("This stack contains:");
  for(var i=0;i<this.count;i++){
    console.log(this.storage[i]);
    if(i!=this.count-1){
    console.log("^");
    console.log("|");

    }
  }
}
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek())
console.log(myStack.pop())
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.display();
