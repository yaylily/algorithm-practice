function slope(arr1, arr2){
    return (arr2[1]-arr1[1]) / (arr2[0]-arr1[0])
}

function solution(dots) {
    const [a, b, c, d] = dots
    if(slope(a, b) === slope(c, d)) return 1
    if(slope(a, c) === slope(b, d)) return 1
    if(slope(a, d) === slope(b, c)) return 1
    
    return 0
}