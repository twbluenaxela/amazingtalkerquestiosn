/*
001 Move Zeroes
---

Given an integer array `nums`, move all `0` to the end of it while maintaining the order of non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

Example 1:

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

Example 2:

```
Input: nums = [0]
Output: [0]
```

**Constraints:**

1. `1 <= nums.length <= 104`
2. `231 <= nums[i] <= 231 - 1`
*/

/**
 * Plan of attack:
 * We cannot make a copy of the array so we can't use methods like filter, map, etc. 
 * We must modify the array directly.
 * First step, go through each of the elements of the array.
 * The first thing to do is to check if you came across a zero while looping through all the elements.
 * If there is a zero, use the splice method to grab that value, then push it to the end of the array.
 * Otherwise, just check if the current value is less than the next value ahead. If not, switch them. 
 */

const nums = [0,1,0,3,12];
console.log('Input', nums)


const moveZeroToEnd = (array) => {
    let zeroArray = []
    //get the zeros, and move each item in numerical order
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            array.splice(i,1)
            zeroArray.push(0)
        }else if(array[i] > array[i + 1]){
            const currentNumber = array[i]
            const nextNumber = array[i + 1]
            const indexOfNextNumber = i + 1
            array.splice(i, 2, nextNumber, currentNumber)
        }
        
    }
    //add the zeros to the end
    for(let j = 0; j < zeroArray.length; j++){
        array.push(0)
    }

    return array
}

console.log('Output: ', moveZeroToEnd(nums))