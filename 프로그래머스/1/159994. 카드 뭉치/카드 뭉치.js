function solution(cards1, cards2, goal) {

    for(let g of goal){
        if(g === cards1[0]){
            cards1.shift()
        } else if(g === cards2[0]){
            cards2.shift()
        } else {
            return "No"
        }
    }
    return "Yes"
}