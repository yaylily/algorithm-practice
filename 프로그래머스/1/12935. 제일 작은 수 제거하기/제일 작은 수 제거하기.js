function solution(arr) {
   const min = Math.min(...arr)
   const index = arr.indexOf(min)
  
   if(arr.length ===1){
       return [-1]
   } else{
        arr.splice(index, 1)       
       return arr
   }
}