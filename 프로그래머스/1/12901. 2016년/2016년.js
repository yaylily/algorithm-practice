function solution(a, b) {
    let weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let whatWeek = b - 1;
    for (let i = 1; i < a; i++) {
        whatWeek += months[i - 1];
    }

    return weeks[whatWeek % 7];
}