//Set - no duplicate elements and elements in no particular order

function mySet(){
	var collection = [];
	
	//(bool) checks for presence of element
	this.has = function(element){
		return (collection.indexOf(element)!== -1)
	}

	this.values = function(){
		return collection;
	}
	this.add = function(element){
		if(!this.has(element)){
			collection.push(element);
			return true;
		}
		else{
			return false;
		}
	}
	this.remove = function(element){
		if(!this.has(element)){
			collection.splice(collection.indexOf(element),1);
			return true;
		}
		else{
			return false;
		}
	}
	this.size = function(){
		return collection.length;
	}
	this.union = function(otherSet){
		var unionSet = new mySet;
		var firstSet = this.values();
		var secondSet = otherSet.values();
			firstSet.forEach(function(s){
				unionSet.add(s);
		});
			secondSet.forEach(function(s){
				unionSet.add(s);

		});
		return unionSet;
	}
	this.intersection = function(otherSet){
		var intersectionSet = new mySet;
		var firstSet = this.values();
			firstSet.forEach(function(s){
				if(otherSet.has(s)){
					intersectionSet.add(s);

				}
		});
		return intersectionSet;
	}
		this.difference = function(otherSet){
		var differenceSet = new mySet;
		var firstSet = this.values();
		var secondSet = otherSet.values();
			firstSet.forEach(function(s){
				if(!otherSet.has(s)){
					differenceSet.add(s);

				}
		});
		return differenceSet;
	}
	this.isSubset = function(otherSet){
		var firstSet = this.values();
		return firstSet.every(function(value){
			return otherSet.has(value);

		});

	}
}

var setA = new mySet();
var setB = new mySet();
setA.add(1);

setB.add(2);
setB.add(3);
setB.add(1);
setB.add(1);
console.log(setA.values())
console.log(setB.values())

console.log(setA.isSubset(setB))
console.log(setA.difference(setB).values())
console.log(setA.intersection(setB).values())
console.log(setA.union(setB).values())