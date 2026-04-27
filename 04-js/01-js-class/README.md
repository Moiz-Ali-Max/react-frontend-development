# JavaScript

It's a scripting or a light-weight programming language that is responsible for processes in the site.

#### What can we do with JS?
To create;
- Web App
- Mobile App
- CLI Tools
- Games

### #Adding in JS
1. Create a file with an extension of .js
2. Add a script tag in the end of HTML and above html body closing tag, and enter src of that file

#### Difference between Java and JavaScript?

### Variable
It is just like a container. To create a variable we have following options;
1. let
    - it has a limited scope, means the variable which is created by log can only valid for that scope.
2. var
    - it has a broad scope not limited to { }
3. const
    - It is fixed value and cannot be changed

#### Rules:
1. Cannot be a reserved keyword (if, let, var, etc)
2. It should be meaningful
3. Cannot start with a number
4. Cannot contain space and hyphen
5. Use Camel Case (first character of word is small, rest of the words first character should be large - best practice)

### DataTypes
1. Primitive DataTypes
2. Reference DataTypes
#### Primitive DataType - Inbuilt DataType
1. String
2. Number
3. Boolean
4. Undefined
5. Null

#### Dynamic Typing
We can change datatype 

#### Reference DataType
1. Objects
2. Arrays
3. Functions

### Operators
1. Arithmetic Operator(+, -, *, /, %, **)
2. Assignment Operator
3. Pre/Post Increment & Decrement Operator
4. Comparison Operator
    - Equality Operator
        1. Loose Equality (==)
        2. Strick Equality (===)
5. Ternary Operator / Conditional Operator
6. Logical Operator
with boleeans;
    - AND
    - OR
    - NOT
with non-booleans;
7. Bitwise Operator
    - Bitwise AND
    - Bitwise OR

#### Operator Precedence

### Control Statement
1. If-else
2. Switch
     - Mapping

### Loops
- For Loop
    ```
    for (let i = 0; i < 5; i = i+1) {
        console.log(i); 
    }
    ```
- While Loop
    ```
    let i = 0;
    while (i < 5) {
        console.log(i);
        i = i + 1;
    }
    ```
- Do-While Loop
    ```
    let i =0;
    do {
        console.log(i);
        i = i + 1;
    } while (i < 5);
    ```