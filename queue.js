// First Come First Serve - If your application makes use of a queueing system for requests, then quite obviously the queue structure becomes applicable for use.
// Breadth First Search - During search, a queue can be used to store nodes that are to be processed. During processing, the adjacent node is added to a queue to allow processing in the same order that they are viewed.
// Cache - The LRU cache implementation is essentially a queue structure, whilst a queue is not efficient enough on it’s own, one can be used to keep the order of cache items.

//First-In-First-Out (FIFO) 

function Queue(){
	collection=[];
	this.print = function(){
		console.log(collection);
	}
	this.enqueue = function(element){
		collection.push(element);
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

var q = new Queue();
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.enqueue('d')
q.print();
q.dequeue();
console.log(q.front());
q.print()