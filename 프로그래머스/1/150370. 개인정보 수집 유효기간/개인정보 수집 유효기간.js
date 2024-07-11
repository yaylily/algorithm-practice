function solution(today, terms, privacies) {
    var answer = [];
    
    const [todayYear, todayMonth, todayDay]= today.split(".").map(Number)
    const todayTotalDays = todayYear*12*28 + todayMonth*28 + todayDay
    
    const termMap = {}
    terms.forEach(term =>{
        const [type, duration] = term.split(" ")
        termMap[type] = parseInt(duration)
    })
    
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(" ")
        const [year, month, day] = date.split(".").map(Number)
        
        const duration = termMap[type]
        let expireYear = year
        let expireMonth = month + duration
        let expireDay = day-1
        
        if( expireDay === 0 ){
            expireDay = 28;
            expireMonth -= 1
        }
        
        if(expireMonth > 12){
            expireMonth -= 12
            expireYear += 1
        }
        
        const expireTotalDays = expireYear*12*28 + expireMonth*28+expireDay
        
        if(expireTotalDays < todayTotalDays){
            answer.push(index + 1)
        }
    })
    
    return answer;
}