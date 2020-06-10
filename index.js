var rect = require('./rectangle')

function solveRect(l,b) {
    console.log("solving for rectangle with l = "+ l + "and b = "+ b);
    rect(l,b, (err, rectangle) => {
        if(err){
            console.log("ERROR ", err.message);
        }
        else {
            console.log("The area of the rectangle of dimensions of l = "+l+" b = "+b+" is "+ rectangle.area(l,b)),
            console.log("The area of the rectangle of dimensions of l = "+l+" b = "+b+" is "+ rectangle.perimeter());
        }
    });
    console.log("This statemet is after the call");

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);