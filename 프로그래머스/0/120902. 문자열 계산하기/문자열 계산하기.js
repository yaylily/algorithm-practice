function solution(my_string) {
    const arr = my_string.split(" ")
    let sum = +arr[0]
    
    for(let i=1; i<arr.length; i+=2){
        if(arr[i] === "+"){
            sum += +arr[i+1]
        } else {
        sum -= +arr[i+1]
        }
    }
    return sum
}