function solution(numbers, hand) {

    function findLocation(key){
      const keyPad= [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]  
      
      for(let i=0; i<keyPad.length; i++){
          for(let j=0; j<3; j++){
              if(keyPad[i][j] === key){
                  return [i, j]
              }
          }
      }
    } 
    let answer = ''    
    let left = "*"
    let right = "#"
    
    for(let number of numbers){
        if(number === 1 || number === 4 || number === 7){
            answer += "L"
            left = number
        } else if (number === 3 || number === 6 || number === 9){
            answer += "R"
            right = number
        } else {
            let l = findLocation(left)
            let r = findLocation(right)
            let m = findLocation(number)
            
            let leftDistance = Math.abs(l[0]-m[0]) + Math.abs(l[1]-m[1])
            let rightDistance = Math.abs(r[0]-m[0]) + Math.abs(r[1]-m[1])
            
            if(leftDistance === rightDistance){
                hand === "right" ? (right = number, answer += "R") : (left = number, answer += "L")
            } else if (leftDistance < rightDistance){
                left = number
                answer += "L"
            } else {
                right = number
                answer += "R"
            }
        }
    }
    return answer
}