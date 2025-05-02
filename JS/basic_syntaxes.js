

// ES6+: Refers to ECMAScript 6 and later versions of Javascript
//     - Before ES6 javascript lacked many modern programming features

// ES6+ Syntaxes:



// 1. Let and Const

    // - let:
    //     - block scoped, limited to {} blocks, functions and if-else
    //     - can be reassigned

    let count = 0
    count = 1 // valid

    // - const:
    //     - Also block scoped
    //     - can not be reassigned but object/array can be modified

    const name = "Alice"
    // name = "Bob" // not valid

    const user = {age" 25}
    user.age = 26 // valid



// 2. Arrow Functions

    // - Regualar Function

    function greet(name) {
        return "Hello, " + name;
    }

    // Arrow Function

    const greet = (name) => "Hello, " + name;
    // func_name = (params) => body

    // Notes:
    //     - Implicit return
    //     - 'this' is lexically bound (unlike regular functions) - important for react event handlers

    // // What do you mean by lexically bound? 

        // // => 'this' takes value from it's surrounding code where the function is defined, not where
        // //     it is called

        //     In Regular functions, 'this' depends on how function is called:

            function regular() {
                console.log(this);
                
            }
            // const obj = {regular}; // {regular: regular}
            const obj = {
                name: "Alice",
                regular() {
                    console.log(this.name)
                }
            }
            obj.regular(); // 'this' is obj, Logs Alice because it is called as a method

            // But now:
            const fn = obj.regular;
            fn(); // 'this' is not bound to obj, fn is called without any object context

            // - In strict mode 'this' is undefined
            // - In  non-strict mode, 'this' becomes global object
                
                // Strict Mode:
                //     - Strict mode enforces stricter parsing and error hadnling in javascript
                //     that helps us:
                //         - write cleaner, safer code
                //         - Avoid common bugs

                // Non-strict mode:
                //     - Just regular javascript before strict mode existed



            // We can bind it
            const fn = obj.regular.bind(obj);
            fn(); // works fine now


// 3. Template Literals:
//      - multi line strings and variable interpolation using backticks

            const name = "Alice";
            const greeting = `Hello, ${name}`;

// 4. Destructuring:
        const colors = ["red", "green", "blue"];
        const [first, second] = colors;
        // first = "red", second = "green"

        const user = {name: "Alice", age: 25}
        const {name, age} = user;
        // name = "Alice", age = 25

// 5. Spread Operator and Rest Opetaor:

            // Spread Operator: check seperate file

            // Rest:
                const [first, ...rest] = [1,2,3] // rest = [2,3]

                function logAll(...agrs){
                    console.log(args)
                }


// 6. Default Parameters
        function greet(name = "Guest"){
            return `Hello, ${name}`;
        }
        greet();

// Import Export