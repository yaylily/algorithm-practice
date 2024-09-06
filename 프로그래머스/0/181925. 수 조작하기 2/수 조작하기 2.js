function solution(numLog) {
    var numLogStr = '';

    
    for(let i =0; i<numLog.length; i++){
    const differences = numLog[i] - numLog[i-1]       
        switch(differences){
            case 1 :
            numLogStr += "w"; break;
            case -1 :
            numLogStr += "s"; break;
            case 10 :
            numLogStr += "d"; break;
            case -10 :
            numLogStr += "a"; break;    
        }
          
    }
    
    return numLogStr;
}