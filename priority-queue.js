//Priority queue

function PriorityQueue(){
	collection=[];

	this.print = function(){
		console.log(collection);
	}

	this.enqueue = function(element){
		if(element.length===2){
				if(this.isEmpty()){
		collection.push(element);
		}
			else{
				var added = false;
				for(var i=0; i<collection.length;i++){
					if(element[1]<collection[i][1]){
						collection.splice(i,0,element);
						added=true;
						break;

					}
				}
				if(!added){
		collection.push(element);
				}
			}
	}
	else{
		console.log("Enter a valid array in the format- [value,priority]")
	}
	}

	this.dequeue = function(){
		return collection.shift();
	}
	this.front = function(){
		return collection[0];
	}
	this.isEmpty = function(){
		return (collection.length==0);
	}

}

var q = new PriorityQueue();
q.enqueue(['a',2])
q.enqueue(['a',3])
q.enqueue(['a',1])
q.enqueue(['a',5])
q.enqueue(['b',1])
q.print();
console.log(q.dequeue());
console.log(q.front());
q.print()