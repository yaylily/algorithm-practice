function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const report_list = {}
    
    
    id_list.forEach((user)=>{
    	report_list[user]=[];
    })
    
    const uniqueReports = [...new Set(report)]
    
    uniqueReports.forEach((entry)=>{
    	const [user_id,report_id] = entry.split(" ");
		if(!report_list[report_id].includes(user_id)){
        	report_list[report_id].push(user_id);
        }
    })
    
    for(const key in report_list){
    	if(report_list[key].length >= k){
        	report_list[key].forEach((user)=>{
            	answer[id_list.indexOf(user)]+=1
            })
        }
    }
    
    return answer;
}