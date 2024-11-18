function solution(answers) {
  let one = [1,2,3,4,5]
  let two = [2,1,2,3,2,4,2,5]
  let three = [3,3,1,1,2,2,4,4,5,5]
  
  const person1 = match(one, answers)
  const person2 = match(two, answers)
  const person3 = match(three, answers)
  
  const max = Math.max(person1, person2, person3)
  const maxPeople = [person1, person2, person3].map((p, index) => { 
      return p === max ? index+1 : -1
  }).filter((a) => a !== -1)
  
  return maxPeople

}

function match(marking, answers){
    let extended = []
    while(extended.length<answers.length){
       extended = extended.concat(marking)
    }
    extended = extended.slice(0, answers.length)
    
    return extended.filter((m, i) => m === answers[i]).length
}