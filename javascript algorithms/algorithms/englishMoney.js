// In England the currency is made up of pound, £, and pence, p, and 
// there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

total = 200	
// Each time through the loop, 
// ways[i] is the total number of ways to get to this 
// amount of money for all the coins seen before 
let ways = [1];
for(let i = 1; i <= total; i++){
    ways.push(0)
}
const denom = [1, 2, 5, 10, 20, 50, 100, 200];
denom.forEach((coin)=>{
    for(let i = 0; i < ways.length - coin; i++){
        ways[i+coin] += ways[i]
    }
})

console.log(ways[200])