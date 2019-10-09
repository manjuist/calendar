function runNian(year) {
    if (year % 400 === 0
        || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}
function getMonthFirstDayWeek(year, month) {
    var first = 1;
    var truthMonth = month - 1;
    var date = new Date(year, truthMonth, first);
    var week = date.getDay();
    return week;
}
function getMonthAllDays(year, month) {
    var days28 = 28;
    var days29 = 29;
    var days30 = 30;
    var days31 = 31;
    var daysMap = {
        1: days31,
        3: days31,
        5: days31,
        7: days31,
        8: days31,
        10: days31,
        12: days31,
        4: days30,
        6: days30,
        9: days30,
        11: days30,
        2: runNian(year) ? days29 : days28
    };
    return daysMap[month];
}
function showCalendar(year, month) {
    var firstDayWeek = getMonthFirstDayWeek(year, month);
    var allDays = getMonthAllDays(year, month);
    var calendarStr = '';
    for (var i = 1; i < allDays; i += 1) {
        console.log(i);
    }
}
