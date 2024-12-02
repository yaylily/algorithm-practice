function solution(keymap, targets) {
  return targets.map((target) => {
    let pressCount = 0      
    
      for(let i=0; i<target.length;i++){
          let temp = Infinity

          for(let key of keymap){
            
              if(key.includes(target[i])){
                  temp = Math.min(temp, key.indexOf(target[i])+1)
              }}
          
                  
            if(temp === Infinity){
                return -1
            }
                  
          pressCount += temp
  }
      return   pressCount
    })
}