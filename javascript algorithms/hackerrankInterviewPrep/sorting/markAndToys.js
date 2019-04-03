function maximumToys(prices, k){
    let inBudgetArr = [];
    for(let i = 0; i < prices.length; i++){
        if(prices[i] <= k){
            inBudgetArr.push(prices[i])
        }
    }
    let total = 0;
    let toyCount = 0;
    for(let i = 0; i < inBudgetArr.length; i++){
        let toyPrice = inBudgetArr[i]
        if(total + toyPrice <= k){
            toyCount++;
            total += toyPrice;
        }
    }
    return(toyCount)
}

const toyArray =  [1,12,5,111,200,100,50];
const budget = 50;

maximumToys(toyArray,budget)