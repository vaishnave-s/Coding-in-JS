//Linked List
function LinkedList(){
	var length = 0;
	var head=null;
	
	var Node=function(element){
		this.element = element;
		this.next=null;

	};

	this.size = function(){
		return length;
	};

	this.head = function(){
		return head;
	};
	//////////
	this.add = function(element){
		var node = new Node(element);
		//linked list is empty
		if(head===null){
			head=node;
		}
		//linked list is not empty
		else{
			currentNode = head;
			//find reference to the last node
			while(currentNode.next){
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		length++;
	}
	//////////
	this.remove = function(element){
		if(this.indexOf(element)!==-1){
	var currentNode = head;
	var previousNode;
	if(currentNode.element=element){
		head=currentNode.next
	}
	else{
		while(currentNode.element!=element){
			previousNode=currentNode;
			currentNode=currentNode.next;
		}
		//the point when currentNode has the element
		//we are searching for
		previousNode.next=currentNode.next;
	}
	length--;
		}
	}
	//////////
	this.isEmpty = function(){
		return (length===0);
	}
	//////////
	this.indexOf=function(element){
		var currentNode = head;
		var index = -1;
		while(currentNode){
			index++;
			if(currentNode.element===element){
				return index;
			}
			currentNode=currentNode.next;

		}
		return -1;
	}
	//////////
	this.elementAt=function(index){
		var currentNode = head;
		var count=0;
		while(count<index){
			count++;
			currentNode = currentNode.next;

		}
		return currentNode.element;
	}
	//////////
	this.addAt = function(index,element){
		var node = new Node(element);
		var currentNode = head;
		var previousNode;
		var currentIndex = 0;
		//index doesn't exist
		if(index>length){
			return false;
		}
		if(index===0){
			node.next = currentNode;
			head=node;
		}
		else{
			while(currentIndex<index){
				currentIndex++;
				previousNode=currentNode;
				currentNode=currentNode.next;
			}
			//the point when currentNode has the element
			//we are searching for
			node.next=currentNode;
			previousNode.next=node;
			
		}
		length++;
	}
		//////////
	this.removeAt = function(index){
		var currentNode = head;
		var previousNode;
		var currentIndex = 0;
		//index doesn't exist
		if(index<0 || index>=length){
			return null;
		}
		if(index===0){
			head=currentNode.next;
		}
		else{
			while(currentIndex<index){
				currentIndex++;
				previousNode=currentNode;
				currentNode=currentNode.next;
			}
			//the point when currentNode has the element
			//we are searching for
			previousNode.next=currentNode.next;

			
		}
		length--;
		return currentNode.element;
	}
	/////////
		this.display = function(){
		if(head===null){
			console.log("The linked list is empty.");
		}
		//linked list is not empty
		else{
			var linkedListStr="";
			for(var i=0;i<length;i++){
				linkedListStr+=String(this.elementAt(i));
				if(i!=length-1){
				linkedListStr+=" -> ";
				}
			}
			console.log(linkedListStr);
		}
	}
	//////////
}

var newlist = new LinkedList();
console.log(newlist.isEmpty());
newlist.add(5);
newlist.add(2);
newlist.add(3);
newlist.add(4);
newlist.display();


console.log("Size:");
console.log(newlist.size());

console.log("Removed the following at index 2:");
console.log(newlist.removeAt(2));
console.log(newlist.elementAt(2));
newlist.addAt(0,7);
newlist.display();

console.log("Removed element 7:");
newlist.remove(7);
newlist.display();