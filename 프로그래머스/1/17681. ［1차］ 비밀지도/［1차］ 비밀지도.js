function solution(n, arr1, arr2) {
    // 각 지도 완성 함수
    function map(arr){
        return arr.map((a) => {
        let line = a.toString(2)
        
        while(line.length < n){
            line = "0"+line
        }
        return line
    })}
    
    // 각 지도 배열
    const map1 = map(arr1)
    const map2 = map(arr2)
    
    let decodedMap = []
    // 지도 두개 비교하여 하나의 지도 완성
    map1.forEach((m, index) => {
        let line = ''        
        for(let i=0; i<m.length; i++){
            if(map1[index][i] === "0" && map2[index][i] === "0"){
                line += " "
            } else {
                line += "#"
            }
        }
        decodedMap.push(line)
    })
    return decodedMap
}
