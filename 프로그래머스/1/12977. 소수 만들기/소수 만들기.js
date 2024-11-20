function solution(nums) {
    let count = 0;
    
    //숫자 3개 더하기    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1;j++){
            for(let k=j+1; k<nums.length;k++){
                const sum = nums[i] + nums[j] + nums[k]
                
                // 소수인지 확인
                let temp = 0
                for(let l=1; l<=Math.sqrt(sum); l++){
                    if(sum%l === 0){
                        temp ++
                        if(l !== sum/l) temp ++
                    }
                }
                if(temp === 2) count ++ 
            }
        }
    }
    return count
}
