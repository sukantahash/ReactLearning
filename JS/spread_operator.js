// conise way to expand elements of an array or abject or iterable




// Expanding Arrays

const arr1 = [1,2,3]
const arr2 = [...arr1, 4, 5] // [1,2,3,4,5]
console.log(arr2)

// Shallow Copy

const original = [10, 20, 30]
const copy = [...original]
console.log(copy)
original.push(50)
console.log(original)
console.log(copy)

obj = {name: "suka", age: 28, address: {pin: 733111}}
copy_obj = {...obj}
console.log(copy_obj)
obj.address.pin = 733124
console.log(copy_obj)

// Notes:
// - primitive values like numbers, strings and booleans are copied directly not reference copy
// - copying object copies only the reference

// Merging Arrays

const a = [1,2]
const b = [3,4]
const merged = [...a, ...b]

// Using In Function Calls

function sum(x, y, z) {
    return x + y + z
}
const numbers = [1,2,3]
total = sum(...numbers)
console.log(total)


// Object Copying and Merging
const obj1 = {a: 1, b:2}
const obj2 = {b:3, c:4}
const mergedObj = {...obj1, ...obj2}
console.log(mergedObj)
obj1.a = 10
    // If there are overlapping MediaKeySession, values from later object 
    // overwrites the earlier one

// Adding and Updating Object properties
const user = {name: "Sukanta", age: 25}
const updatedUser = {...user, age:26}
console.log(updatedUser)


// More on this
    // - Rest Operator
    // - Difference with Rest Operator

// Other Shallow copy
    
    // Array only:

        //     arr1.slice()
        //     [].concat(arr)
        //      Array.from(arr)

    // Objects only:
        // Object.assign({}, obj)

    


// Deepcopy
// structuredClone(arr) // deepcopy

