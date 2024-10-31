function solution(phone_number) {
    const lastNum = phone_number.slice(-4)
    
    return "*".repeat(phone_number.length-4) + lastNum
}