function solution(arr1, arr2) {
    
    return arr1.map((a, index1) => a.map((b, index2) => b + arr2[index1][index2]))
    
}