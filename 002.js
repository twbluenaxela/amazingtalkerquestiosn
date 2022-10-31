/*
## **implement promisify()**

---

Let's take a look at the following error-first callback.

```jsx
const callback = (error, data) => {
  if (error) {
    // handle the error
  } else {
    // handle the data
  }
}
```

Now think about async functions that take the above error-first callback as the last argument.

```jsx
const func = (arg1, arg2, callback) => {
  // some async logic
  if (hasError) {
    callback(someError)
  } else {
    callback(null, someData)
  }
}
```

You can see what needs to be done now. Please **implement promisify()** to make the code better.

```jsx
const promisedFunc = promisify(func)

promisedFunc().then((data) => {
  // handles data
}).catch((error) => {
  // handles error
})
```

Function definition

*/

/**
 * Basically, I just have to make a promise wrapper. 
 * I overthought it. 
 */

function promisify(func) {
    return function(...args) {
        return new Promise((res, rej) => {
            function callback (error, result) {
                if(error) {
                    rej(error)
                } else {
                    res(result)
                }
            }
        })
    }
}
