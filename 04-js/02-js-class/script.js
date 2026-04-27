console.log("JavaScript Class 02")

// create object
// const rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log("drawing rectangle")
//     }
// };

// Factory Function
function createRectangle(len, bre) {

    //create object
    return rectangle = {
        //one way
        // length: length,
        // breadth: breadth,

        //2nd way
        // length,
        // breadth,

        //3rd way
        length: len,
        breadth: bre,

        draw: function() {
            console.log("Drawing Rectangle using factory function");
        }
    }; 
}

//create object using factory func
let reactangleObj1 = createRectangle(10, 10);
let rectangleObj2 = createRectangle(20, 20);
let rectangleObj3 = createRectangle(30, 30);



// Constructor Function - Follow Some Notation which is Pascal Notation (First Letter of every word is capital e.g, NumberOfStudents)
function Circle(rad, dia) {
    this.radius = rad,
    this.diameter = dia,

    this.draw = function() {
        console.log("Drawing Circle using Constructor function");
    }
}

let circleObj1 = new Circle(20, 40);
