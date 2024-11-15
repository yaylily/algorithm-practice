function solution(a, b) {
    const week = [ "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" ]
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    const days = month.slice(0,a-1).reduce((acc, value) => acc+value, 0) + b
    
    return week[(days-1)%7]
}