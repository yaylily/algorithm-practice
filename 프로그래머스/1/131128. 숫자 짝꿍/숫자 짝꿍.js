function solution(X, Y) {
    let answer = ''
    let obj = {}
    
    for(let i=0; i<X.length; i++){
        obj[X[i]] = obj[X[i]] ? obj[X[i]] += 1 : 1
    }
    
    const commonKeys = Object.keys(obj).filter((o) => Y.includes(o))

    if(commonKeys.length === 0) return '-1'
    if([...new Set(commonKeys)].join('') === '0') return '0'
    
    let yArr = Y.split("").sort((a, b) => b-a)

    yArr.forEach((y) => {
            if(obj[y] > 0){
                answer += y
                obj[y] -= 1
            }
    })
    return answer
}