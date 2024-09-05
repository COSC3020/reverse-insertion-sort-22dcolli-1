//Atttempted on my own based off of given function(commented out function)
//Checks would not pass, so I edited my function from reverse-insertion-sort-22dcolli cutting out comments I didn't need anymore and editing format
//Flustered because they ended up being the same function with different names, I can't figure out what the issue here is
//Just to cover my bases, Ishita Patel helped to teach me last semester and proofread last semesters innitial code
/*
function reverseInsertionSort(arr) {
  for(var i = arr.length-1; i >= 0; i--) {
    var val = arr[i];
    var j;
    for(j = i; j < arr.length-1  && arr[j+1] < val; j++) {
      arr[j] = arr[j+1];
    }
    arr[j] = val;
  }
  return arr;
}
*/

function insertionSortReverse(arr) {
  for(var i = arr.length-1; i >= 0; i--) {
    var val = arr[i];
    var j;
    for(j = i; j < arr.length-1  && arr[j+1] < val; j++) {
      arr[j] = arr[j+1];
    }
    arr[j] = val;
  }
  return arr;
}
