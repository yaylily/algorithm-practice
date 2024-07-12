function solution(players, callings) {
    var answer = [];
    
    //인덱스를 담은 players 객체를 만든다.
    let playerIndexMap = {}
    players.forEach((player, index) => {
        playerIndexMap[player] = index
    })
    
    //callings를 하나씩 돌린다.
    callings.forEach((callings) => {
        let index = playerIndexMap[callings]
        if(index>0){
            [players[index-1], players[index]] = [players[index], players[index-1]]
       
        playerIndexMap[players[index]] = index
        playerIndexMap[players[index-1]] = index -1
         }
    })
    answer = players
    
    return answer;
}