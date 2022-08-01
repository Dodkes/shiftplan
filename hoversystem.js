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
    case 0: currentHolidayMonth = januaryHoliday
        break;
    case 4: currentHolidayMonth = mayHoliday
        break;
    case 6: currentHolidayMonth = julyHoliday
        break;
    case 7: currentHolidayMonth = augustHoliday
        break;
    case 8: currentHolidayMonth = septemberHoliday
        break;
    case 10: currentHolidayMonth = novemberHoliday
         break;
    case 11: currentHolidayMonth = decemberHoliday
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