// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

function findRoutes(gridSize){
   let routeMatrix = [];
   for(let i = 1; i <= gridSize; i++){
      routeMatrix.push(1);
   }
   for(let i = 1; i <= gridSize; i++){
      for(let j = 1; j < gridSize; j++){
         routeMatrix[j] = routeMatrix[j] + routeMatrix[j-1];
      }
      routeMatrix[i] = 2 * routeMatrix[i-1];
   }
   console.log(routeMatrix);
   return routeMatrix[gridSize];
}

gridSize = 4;

n = findRoutes(gridSize);
console.log(n);