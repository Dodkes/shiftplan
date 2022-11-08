let leftPanelSelectedId
let topPanelDaySelectedId
let topPanelMonthSelectedId
let a, b, c, d, e, f, g
//Hover color columns and row
$('div').hover((event)=>{
    let selectedId = event.target.id
    let newId = selectedId.split(' ')
    if (newId[0] === 'Operator') {
        leftPanelSelectedId = document.getElementById('line ' + newId[1])
        topPanelDaySelectedId = document.getElementById('topLineDay ' + newId[2])
        topPanelMonthSelectedId = document.getElementById('topLineMonth ' + newId[2])
        bottomPaneloperatorsD = document.getElementById('operatorsD ' + newId[2])
        bottomPanelSLD = document.getElementById(`shiftleaderD ${newId[2]}`)
        bottomPaneloperatorsN = document.getElementById('operatorsN ' + newId[2])
        bottomPanelSLN = document.getElementById(`shiftleaderN ${newId[2]}`)

        if (topPanelDaySelectedId.style.backgroundColor !== hoverColor) {
            a = topPanelDaySelectedId.style.backgroundColor
            topPanelDaySelectedId.style.backgroundColor = hoverColor
        }

        if (topPanelMonthSelectedId.style.backgroundColor !== hoverColor) {
            b = topPanelMonthSelectedId.style.backgroundColor
            topPanelMonthSelectedId.style.backgroundColor = hoverColor
        }

        if (leftPanelSelectedId.style.backgroundColor !== hoverColor) {
            c = leftPanelSelectedId.style.backgroundColor
            leftPanelSelectedId.style.backgroundColor = hoverColor
        }

        if (bottomPaneloperatorsD.style.backgroundColor !== hoverColor) {
            d = bottomPaneloperatorsD.style.backgroundColor
            bottomPaneloperatorsD.style.backgroundColor = hoverColor
        }

        if (bottomPanelSLD.style.backgroundColor !== hoverColor) {
            e = bottomPanelSLD.style.backgroundColor
            bottomPanelSLD.style.backgroundColor = hoverColor
        }

        if (bottomPaneloperatorsN.style.backgroundColor !== hoverColor) {
            f = bottomPaneloperatorsN.style.backgroundColor
            bottomPaneloperatorsN.style.backgroundColor = hoverColor
        }

        if (bottomPanelSLN.style.backgroundColor !== hoverColor) {
            g = bottomPanelSLN.style.backgroundColor
            bottomPanelSLN.style.backgroundColor = hoverColor
        }
    }
// SPACE PROBELM - KED KLIKNEM SPACE NA NIECO TAK HOVER COLOR OSTANE
}, ()=>{
        if (topPanelDaySelectedId){
            topPanelDaySelectedId.style.color = 'white'
            leftPanelSelectedId.style.color = 'white'
            topPanelMonthSelectedId.style.color = 'white'
            topPanelDaySelectedId.style.backgroundColor = a
            topPanelMonthSelectedId.style.backgroundColor = b
            leftPanelSelectedId.style.backgroundColor = c
            bottomPaneloperatorsD.style.backgroundColor = d
            bottomPanelSLD.style.backgroundColor = e
            bottomPaneloperatorsN.style.backgroundColor = f
            bottomPanelSLN.style.backgroundColor = g
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
    getNextMonth === 11)
{ //styling holidays using stylingWeekends function
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