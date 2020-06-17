class Node{
	constructor(data,left=null,right=null){
		this.data=data;
		this.left=left;
		this.right=right;
	}
}

class BinarySearchTree{
	///////////////
	constructor(){
		this.root = null;
	}
	///////////////
	add(data){
		const node=this.root;
		if(node===null){
			this.root=new Node(data);
			return;
		}
		else{
			const searchTree=function(node){
				if(data<node.data){
					if(node.left===null){
						node.left=new Node(data);
						return;
						
					}
					else{
						return searchTree(node.left);
					}
				}
					else if(data>node.data){
						if(node.right===null){
							node.right=new Node(data);
						}
					else{
						return searchTree(node.right);
					}

					}
					else{
						//Doesn't add data if it's already present (data==node.data)
						return null;
					}
			};
			return searchTree(node);
		}
	}
	///////////////
	remove(data){
		const removeNode = function(node,data){
			if(node==null){
				return null;

			}
			if(data==node.data){

				//node has no children
				if(node.left===null && node.right===null){
					return null;
				}

				//has only right child
				if(node.left===null){
					return node.right

				}
				//has only left child
				if(node.right===null){
					return node.left
				}
				//has two children
				var tempNode=node.right;
				while(tempNode.left!=null){
					tempNode=tempNode.left
				}
				node.data=tempNode.data;
				node.right = removeNode(node.right,tempNode.data);
				return node;
				
			}
			else if(data<node.data){
				node.left=removeNode(node.left,data);
				return node;
			}
				//data>node.data
			else{
				node.right=removeNode(node.right,data);
				return node;
			}
		}
		
	if(this.isPresent(data)){
	this.root=removeNode(this.root,data);
	}
	else{
		console.log(String(data)+" doesn't exist in this tree.");
	}
	}
	///////////////
	findMin(){
		let current=this.root;
		while(current.left!==null){
			current=current.left
		}
		return current.data;
	}
		findMax(){
		let current=this.root;
		while(current.right!==null){
			current=current.right
		}
		return current.data;
	}
	///////////////
	isPresent(data){
		let current=this.root;
		while(current){
			if(data===current.data){
				return true;
			}
			else if(data<current.data){
				current=current.left;

			}
			else{
				current=current.right;
			}
		}
		return false;
	}
	///////////////
	// display(){
	// 	const node=this.root;
	// 	if(node===null){
	// 		console.log("This tree is empty");
	// 	}
	// 	else{
	// 		// var counter=0;
	// 		const displayTree=function(node){
	// 				if(node.left===null && node.right===null){
	// 		// 			counter++;
	// 		// console.log('\t'.repeat(counter)+String(node.data)+'\t'.repeat(counter));
	// 		console.log(node.data);
			
	// 				}
	// 				else{
	// // 					counter++;
	// // console.log('\t'.repeat(counter)+String(node.data)+'\t'.repeat(counter));
	// 		console.log(node.data);

	// 					 if(node.left===null){
	// 		return displayTree(node.right);

	// 					 }
	// 					if(node.right===null){
	// 		return displayTree(node.left);
	// 					}
	// 					}
	// 		};
	// 		return displayTree(node);
	// 	}
	// }
	///////////////

}
const bst= new BinarySearchTree();
// bst.display()

for(var i=1; i<11;i++){
bst.add(i);
}
bst.remove(1)
// console.log(bst.findMin());
// bst.display()