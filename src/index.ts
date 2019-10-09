function runNian(year:number):boolean {
  if (
    year % 400 === 0
    || (year % 4 === 0 && year % 100 !== 0)
  ) {
    return true;
  }
  return false;
}

function getMonthFirstDayWeek(year:number, month:number):number {
  const first:number = 1;
  const truthMonth = month - 1;
  const date:Date = new Date(year, truthMonth, first);
  const week:number = date.getDay();
  return week;
}

function getMonthAllDays(year:number, month:number) {
  const days28:number = 28;
  const days29:number = 29;
  const days30:number = 30;
  const days31:number = 31;
  interface TypeDaysMap{
      [propName:string]: number;
  }
  const daysMap:TypeDaysMap = {
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
    2: runNian(year) ? days29 : days28,
  };
  return daysMap[month];
}

function insertElement(ele:string):void{
  document.body.innerHTML = ele;
}

function showCalendar(
  year:number,
  month:number,
):void {
  const firstDayWeek = getMonthFirstDayWeek(year, month);
  const allDays = getMonthAllDays(year, month);
  let calendarStr = '';
  for (let i = 1; i < firstDayWeek; i += 1) {
    calendarStr += `<span>${i}<span>`;
  }
  for (let i = firstDayWeek; i < allDays; i += 1) {
    calendarStr += `<span>${i}<span>`;
  }
  insertElement(calendarStr);
}

function next():void{
}

function prev():void{
}

function init():void{
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  showCalendar(currentYear, currentMonth);
}

function updateCalendar(year:number, month:number):void{
  showCalendar(year, month);
}

init();
