let leftPanelSelectedId
let topPanelDaySelectedId
let topPanelMonthSelectedId
//Hover color columns and row
$('div').hover((event)=>{
    let selectedId = event.target.id
    let newId = selectedId.split(' ')
    if (newId[0] === 'Operator') {
        leftPanelSelectedId = document.getElementById('line ' + newId[1])
        topPanelDaySelectedId = document.getElementById('topLineDay ' + newId[2])
        topPanelMonthSelectedId = document.getElementById('topLineMonth ' + newId[2])
        topPanelDaySelectedId.style.color = '#ff6600'
        leftPanelSelectedId.style.color = '#ff6600'
        topPanelMonthSelectedId.style.color = '#ff6600'
    }

}, ()=>{
        if (topPanelDaySelectedId){
            topPanelDaySelectedId.style.color = 'white'
            leftPanelSelectedId.style.color = 'white'
            topPanelMonthSelectedId.style.color = 'white'
        }

})
//Find weekends and set them color
stylingWeekends(sundayArray, sundayColor)
stylingWeekends(saturdayArray, saturdayColor)

let currentHolidayMonth = []

switch (getNextMonth){
    case 0: currentHolidayMonth = holidays.january
        break;
    case 4: currentHolidayMonth = holidays.may
        break;
    case 6: currentHolidayMonth = holidays.july
        break;
    case 7: currentHolidayMonth = holidays.august
        break;
    case 8: currentHolidayMonth = holidays.september
        break;
    case 10: currentHolidayMonth = holidays.november
         break;
    case 11: currentHolidayMonth = holidays.december
        break;
}
if (getNextMonth === 0 ||
    getNextMonth === 4 || 
    getNextMonth === 6 ||
    getNextMonth === 7 ||
    getNextMonth === 8 ||
    getNextMonth === 10 ||
    getNextMonth === 11){
        stylingWeekends(currentHolidayMonth, holidayColor)
}

function stylingWeekends(myarray, color) {
    for (x in myarray) {
        styleWeekend(x, myarray, color)
    }
}

function styleWeekend(x ,myarray, color) {
    for (let i = 1; i < operatorsArray.length +1; i++) {
        let y = document.getElementById('Operator ' + i + ' ' + myarray[x])
        y.style.backgroundColor = color
    }
}