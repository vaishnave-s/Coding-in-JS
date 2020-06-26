/* Heaps */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

let MinHeap = function() {
	
	let heap = [null];
	this.print = function() {console.log(heap)};
	
	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] < heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
  
	//Heap sort: Asc
	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

};

let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = function() {console.log(heap)};

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
		//Heap sort: Desc
	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

};
console.log("MinHeap:");

min_hp = new MinHeap();

for(var i=0;i<7;i+=2){
min_hp.insert(i);
min_hp.insert(i+5);

}
min_hp.print();
console.log("Remove min number:");
console.log(min_hp.remove());
console.log("Sorted min heap:");
console.log(min_hp.sort());

console.log();
console.log("MaxHeap:");

max_hp = new MaxHeap();
for(var i=1;i<7;i+=2){
max_hp.insert(i);
max_hp.insert(i+5);

}
max_hp.print();
console.log("Remove max number:");
console.log(max_hp.remove());
console.log("Sorted max heap:");
console.log(max_hp.sort());
