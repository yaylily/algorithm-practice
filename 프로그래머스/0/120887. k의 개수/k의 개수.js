function solution(i, j, k) {
    let count = 0;
    
    for(let l=i; l<=j; l++){
        count += [...String(l)].filter((a) => a.includes(String(k))).length
    }
    return count
}