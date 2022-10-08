// Declare all variables globally

let body = document.getElementsByTagName("body"); // We get the body from the HTML document
let squareWidth = "100px"; // Declare our width using string format and assign it a variable
let squareHeight = "100px"; // Declare our height using string format and assign it a variable
let initialColor = ""; // Declare a single variable to take on the values of two different colors later
let colorRed = "red"; // Declare our color red
let colorBlack = "black"; // Declare our color black
let rows = 9; // Declare our number of rows of squares
let columns = 9; // Declare our number of columns of squares

// Create inner squares and add them to our 'div' element within the body of the HTML.
function innerSquares(checkerBoardBody, width, height, color){
    let innerSquare = document.createElement('div'); // Creating the 'div' element for a single square
    innerSquare.style.width = width; // add a width style to each square
    innerSquare.style.height = height; // add a height style to each square
    innerSquare.style.backgroundColor = color; // set the background color for each square
    innerSquare.style.margin = "1px 1px 1px 1px"; // create some margins around the outside of the inner squares
    checkerBoardBody.append(innerSquare); // append the squares to the checker board
}

 // With this function we will create a parent box to attach all our smaller boxes 
function boardBox(boxNumbers){ // Having an argument of a number allows us index where we will later append the inner boxes
    checkerBoardBody = document.createElement("div"); // this creates a 'div' element for the parent square to the individual squares created with the use of the afore mentioned function 
    body[0].append(checkerBoardBody); // Then we append the checker board body to the parent at the top left corner of the window
    checkerBoardBody.setAttribute("id", boxNumbers); // next we determine the attributes of checker board body
    checkerBoardBody.style.display = "flex"; // we then determine that all the boxes will be the same length

    return checkerBoardBody; // We then return the checker board body for use in the function below
}

// This function iterates through the rows and columns of the parent box to populate the checker board with smaller inner red and black boxes
function colorCheckerBoard(){ 
    for(let i = 0; i < rows; i++){ // Our loops iterate through the rows and columns of the squares, coloring them red and black accordingly
        let checkerBoardBody = boardBox (String(i)); // the index location of the boardBox is converted to a string
        for(let j = 0; j < columns; j++){ 
            if(j % 2 == 0 && i %2 == 0){ 
                color = colorRed; 
            }
            else {
                color = colorBlack; 
            if(i % 2 != 0 && j % 2 != 0){ 
                    color = colorRed;
                }
            }
         innerSquares(checkerBoardBody, squareWidth, squareHeight, color); /// Then we execute the function above to create attributes to the iner boxes
        }
    }
}



colorCheckerBoard(); // Our call to the checkerBOard function (our primary function), begins the process


