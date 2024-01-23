let arr = [1, 2, -5, -4];
let product = -10;
let length = arr.length;

function maxProduct(arr, length, p) {
  let minVal = arr[0];
  let maxVal = arr[0];
  let maxProduct = arr[0];

  for (let i = 1; i < length; i++) {
    // When multiplied by a negative number, maxVal becomes minVal, and minVal becomes maxVal.
    if (arr[i] < 0) {
      let temp = maxVal;
      maxVal = minVal;
      minVal = temp;
    }

    // maxVal and minVal store the product of the subarray ending at arr[i].
    maxVal = Math.max(arr[i], maxVal * arr[i]);
    minVal = Math.min(arr[i], minVal * arr[i]);

    // Check if the current product is equal to the given product (p).
    if (minVal == p || maxVal == p) {
      return true;
    }

    // Max Product of array.
    maxProduct = Math.max(maxProduct, maxVal);
  }

  // Return the maximum product found in the array.
  return false;
}

// Driver Code
if (maxProduct(arr, n, product)) {
  document.write("YES");
} else {
  document.write("NO");
}
