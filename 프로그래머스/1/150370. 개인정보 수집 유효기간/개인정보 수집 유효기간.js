function solution(today, terms, privacies) {
   let answer = []
 
   const [year, month, day] = today.split(".").map(Number)
   let termsObj = {}
   
   for(let term of terms){
       const [version, period] = term.split(" ")
       termsObj[version] = +period
   }
    
    for(let i=0; i<privacies.length; i++){
        let [privacy, expiration] = privacies[i].split(" ")
        let [privacyYear, privacyMonth, privacyDay] = privacy.split(".").map(Number)
        
        privacyMonth += termsObj[expiration]
        while(privacyMonth > 12){
            privacyYear += 1
            privacyMonth -= 12
        }
        
        privacyDay -= 1
        if(privacyDay === 0){
            privacyMonth -= 1
            privacyDay += 28
            if(privacyMonth === 0){
                privacyMonth += 12
                privacyYear -= 1
            }
        }
        
        if(privacyYear < year ||
           (privacyYear === year && privacyMonth < month) ||
          (privacyYear === year && privacyMonth === month && privacyDay < day)) {
                 answer.push(i+1)
            }
    }   
   return answer
}