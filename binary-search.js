//binary search

function binarySearch(array, n) {
    var lowIndex = 0,
        highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2);
        
				if (array[midIndex] == n) {
            return midIndex;
        } else if (n > array[midIndex]) {
            lowIndex = midIndex+1;
        } else {
            highIndex = midIndex-1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4], 4));
console.log(binarySearch([1,2,3,4], 5));

function binarySearchIndexBased(array, startIndex, endIndex, value) {
    if (startIndex > endIndex) {
        return -1;
    }
    var middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[middleIndex] == value) {
        return middleIndex;
    } else if (array[middleIndex] > value) {
        return binarySearchIndexBased(array, startIndex, middleIndex - 1);
    } else {
        return binarySearchIndexBased(array, middleIndex + 1, endIndex);
    }
}
console.log(binarySearchIndexBased([-121, 2, 3, 4, 5, 71, 102], 0, 6, 4));
console.log(binarySearchIndexBased([-121, 2, 3, 4, 5, 71, 102], 4, 6, 4));