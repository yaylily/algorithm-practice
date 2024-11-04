function solution(n, m) {

    //최대 공약수 구하기
    let GCD = 1;
    let min = Math.min(n, m)
    
    for(let i=1; i<= min; i++){
        if(n%i === 0 && m%i === 0){
            GCD = i
        }
    }
    
    //최소 공배수 구하기
    let LCM = (n*m) / GCD
    
    return [GCD, LCM]
    
}