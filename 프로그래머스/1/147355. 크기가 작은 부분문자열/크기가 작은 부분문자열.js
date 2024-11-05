function solution(t, p) {
    let tPartArr = []
    const pLen = p.length
    
    //p 길이의 t의 부분 문자열 배열 만들기
    for(let i=0; i<t.length-(pLen-1) ; i++){
        let temp = ''
        for(let j=i; j<i+pLen; j++){
             temp += t[j]
        }
        tPartArr.push(temp)    
    }

    //p와 비교해서 작은 수 구하기
    const smaller = tPartArr.filter((a) => a<=+p)
    
    return smaller.length
}