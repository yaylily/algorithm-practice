function solution(array, n) {
    return array.reduce((prev, curr) => {
        const diffPrev = Math.abs(prev-n);
        const diffCurr = Math.abs(curr-n)
        if(diffCurr < diffPrev){
            return curr
        } else if(diffCurr===diffPrev){
            return prev<curr ? prev : curr;
        } else {
            return prev
        }
    })
}