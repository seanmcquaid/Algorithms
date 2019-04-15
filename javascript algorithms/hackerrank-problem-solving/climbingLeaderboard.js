function climbingLeaderboard(scores, alice) {
    let leaderBoardObj = {};
    let leaderBoardArr = [];
    let aliceRankingArr = []
    for(let i = 0; i < scores.length; i++){
        leaderBoardObj[scores[i]] = (leaderBoardObj[scores[i]] || 0) + 1;
    }

    for(let keys in leaderBoardObj){
        leaderBoardArr.push(parseInt(keys))
    }
    
    leaderBoardArr.reverse();
    alice.reverse();
    console.log(leaderBoardArr)
    console.log(alice)
}

const rankingScores = [100,100,50,40,40,20,10];

const aliceScores = [5,25,50,120]

climbingLeaderboard(rankingScores, aliceScores)