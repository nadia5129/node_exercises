// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    let result = [];
    for(let i =0; i < array.length; i++){
        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }
    return result;


}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console
console.log(removeDuplicates(testArray3));
