// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

const grid = 2;
var path = 1;

for (i = 0; i < grid; i++) {
   path *= (2* grid) - i;
   path /= i + 1;
}

console.log(path);