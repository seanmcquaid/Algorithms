const whatFlavors = (cost, money) => {
    let initialMoney = money;

    const filteredArray = cost.filter(item => item < money);

    for(let i = 0; i < filteredArray.length; i++){
        for(let j = 0; j < filteredArray.length; j++){
            if(filteredArray[i] + filteredArray[j] == money && filteredArray[i] !== filteredArray[j]){
                console.log(cost.indexOf(filteredArray[i]) + 1, cost.indexOf(filteredArray[j]) + 1);
                break;
            }
        }
    }
};

const money = 5;
const cost = [2,1,3,5,6];

whatFlavors(cost, money);