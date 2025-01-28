function solution(id_list, report, k) {
    
    // 중복 report 없애기
    const uniqueReport = new Set(report)
    
    // 신고된 횟수 객체
    let reportCounts = {}
    // 신고자별 신고한 유저
    let userReports = {}
    
    // 초기화
    id_list.forEach(id => {
        reportCounts[id] = 0
        userReports[id] = []
    })
    
    // 신고 처리
    uniqueReport.forEach((a) => {
        const [reporter, reported] = a.split(" ")
        reportCounts[reported] += 1
        userReports[reporter].push(reported)
    })
    
    // 메일 발송 횟수
    return id_list.map(id => {
        return userReports[id].filter((reportedUser) => reportCounts[reportedUser] >= k).length
    })
}