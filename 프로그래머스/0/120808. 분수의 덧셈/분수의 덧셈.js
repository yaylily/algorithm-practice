function solution(numer1, denom1, numer2, denom2) {
    
    function gcd(a, b) {
        return b===0 ? a : gcd(b, a%b)
    } 
    
    let commonDenom = denom1 * denom2
    let numeraterSum = numer1*denom2 + denom1*numer2
    
    let commonGcd = gcd(numeraterSum, commonDenom)
    
    return [numeraterSum/commonGcd, commonDenom/commonGcd ]
}