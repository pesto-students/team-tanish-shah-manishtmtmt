function drawTriangle(triangleSize) {

   // Your solution goes here
   
   for (let i = 0; i < triangleSize; i++) {
     let bag = "";
     for (let j = 0; j <= i; j++) {
       bag += "* ";
     }
     console.log(bag);
   }
   
}