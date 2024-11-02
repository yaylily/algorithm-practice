function solution(price, money, count) {
    //놀이기구를 count번 탔을 때의 총 금액
    let totalPrice = 0;
    
    for(let i=1; i<=count; i++){
        totalPrice += i*price
    }
    //내가 가진 금액이랑 비교
    return money < totalPrice ? totalPrice - money : 0
}