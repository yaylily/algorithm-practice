function solution(lottos, win_nums) {
    var answer = [];
    
    let maxRank = 0;
    let minRank = 0;
    
    minRank = lottos.filter((num)=> num !== 0 && win_nums.includes(num)).length;
    maxRank = lottos.filter((num)=> num === 0 ).length + minRank;
    
    answer.push(findRank(maxRank));
    answer.push(findRank(minRank));
    
        
    return answer;
}
    
    function findRank(count){
        switch(count){
            case 6:
                return 1;
            case 5:
                return 2;
            case 4:
                return 3;
            case 3:
                return 4;
            case 2:
                return 5;
            default:
                return 6
        }

}