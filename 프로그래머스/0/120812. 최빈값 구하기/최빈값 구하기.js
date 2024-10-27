function solution(array) {

    let countObj = array.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1
        return acc
    }, {})

    const maxCount = Math.max(...Object.values(countObj))
    const maxNum = Object.keys(countObj).filter((key) => countObj[key] === maxCount)
    
    return maxNum.length > 1 ? -1 : +maxNum[0]
}