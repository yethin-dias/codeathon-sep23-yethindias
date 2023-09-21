function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  

  const arr1 = [];
  const expected1 = [];
  const result1 = sortAscending(arr1);
  console.log(JSON.stringify(result1) === JSON.stringify(expected1)); // Output: true
  
  // Test case 2: Array with one element
  const arr2 = [42];
  const expected2 = [42];
  const result2 = sortAscending(arr2);
  console.log(JSON.stringify(result2) === JSON.stringify(expected2)); // Output: true
  
  // Test case 3: Array with duplicate elements
  const arr3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const expected3 = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
  const result3 = sortAscending(arr3);
  console.log(JSON.stringify(result3) === JSON.stringify(expected3)); // Output: true
  
  // Test case 4: Array with negative numbers
  const arr4 = [-3, 1, -4, 1, 5, -9, 2, 6, 5, -3, 5];
  const expected4 = [-9, -4, -3, -3, 1, 1, 2, 5, 5, 5, 6];
  const result4 = sortAscending(arr4);
  console.log(JSON.stringify(result4) === JSON.stringify(expected4)); // Output: true
  
  // Test case 5: Array with large numbers
  const arr5 = [1000000, 10000000, 100000000, 1000000000, 10000000000];
  const expected5 = [1000000, 10000000, 100000000, 1000000000, 10000000000];
  const result5 = sortAscending(arr5);
  console.log(JSON.stringify(result5) === JSON.stringify(expected5)); // Output: true



  function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Generate an array of 50000 random numbers
  const arr = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100000));
  
  // Measure the time it takes to sort the array
  console.time('sort');
  sortAscending(arr);
  console.timeEnd('sort');


  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return result.concat(left, right);
  }