
  var array_length;
  /* to create MAX  array */  
  function heap_root(input, i,animations) {
      var left = 2 * i + 1;
      var right = 2 * i + 2;
      var max = i;
  
      if (left < array_length && input[left] > input[max]) {
          max = left;
      }
  
      if (right < array_length && input[right] > input[max])     {
          max = right;
      }
  
      if (max !== i) {
          swap(input, i, max,animations);
          heap_root(input, max,animations);
      }
  }
  
  function swap(input, index_A, index_B,animations) {
      var temp = input[index_A];
  
      input[index_A] = input[index_B];
      input[index_B] = temp;
      animations.push([index_A,input[index_A],index_B,input[index_B]]);
  }
  
  export function heap_Sort(input) {
    const animations = [];
      
      array_length = input.length;
  
      for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
          heap_root(input, i,animations);
        }
  
      for (i = input.length - 1; i > 0; i--) {
          swap(input, 0, i,animations);
          array_length--;
        
        
          heap_root(input, 0,animations);
      }
      //return input;
      return animations;
  }
  
//   var arr = [3, 0, 2, 5, -1, 4, 1];
//   heapSort(arr);
//   console.log(arr);
  