const summaryGrid = document.querySelector('.summaryGridContainer')

//Set current day color top panel------------------------------------
let currentDay = new Date().getDate()
let topLineDay = document.getElementById('topLineDay ' + currentDay)
let topLineMonth = document.getElementById('topLineMonth ' + currentDay)
topLineDay.style.backgroundColor = currentDayColor
topLineMonth.style.backgroundColor = currentDayColor
//-------------------------------------------------------------------
$('.summaryGridContainer').css('grid-template-columns', gridColumns)

const sumGrid = (operators) => {
    for (i = 0; i < monthDays; i++) {
        let newElement = new NewElement('div', 'id', operators + ' ' + (i+1), '-', summaryGrid)
        newElement.createNewElement()
        $(newElement.elType).addClass('sumGrid')
    }
}

sumGrid('operatorsD')
sumGrid('shiftleaderD')
sumGrid('operatorsN')
sumGrid('shiftleaderN')

const styleSummaryTable = (array, color) => {
    let myArray = []
    for (x of array) {
        let a, b, c, d
        a = document.getElementById('operatorsD' + ' ' + x)
        b = document.getElementById('shiftleaderD' + ' ' + x)
        c = document.getElementById('operatorsN' + ' ' + x)
        d = document.getElementById('shiftleaderN' + ' ' + x)
        myArray.push(a, b, c, d)
    }

    for (y in myArray) {
        myArray[y].style.backgroundColor = color
    }
}
 
styleSummaryTable(saturdayArray, saturdayColor)
styleSummaryTable(sundayArray, sundayColor)

if (getNextMonth === 0 ||
    getNextMonth === 4 || 
    getNextMonth === 6 ||
    getNextMonth === 7 ||
    getNextMonth === 8 ||
    getNextMonth === 10 ||
    getNextMonth === 11){
        styleSummaryTable(currentHolidayMonth, holidayColor)
        stylingWeekends(currentHolidayMonth, holidayColor)

}
//Looping through columns if there is D or N as text content-----------------------------------
function summaryOperatorsCount(splitId) {
    let [dayshiftCount, nightshiftCount] = [0, 0]
    for (i = 1; i <= operatorsArray.length; i++) {
        let columnLoop = document.getElementById('Operator ' + i + ' ' + splitId[2])
        if (columnLoop.textContent === 'D') {
            dayshiftCount++
        } else if (columnLoop.textContent === 'N') {
            nightshiftCount++
        }
    }
    let getComputeElementD = document.getElementById('operatorsD ' + splitId[2])
    let getComputeElementN = document.getElementById('operatorsN ' + splitId[2])
    
//Summary operators counter + styling RED/GREEN ------------------------------------------------
    if (dayshiftCount === 0) { summaryCellUpdate(getComputeElementD, '0.5vw', 'none', white, '-') } 
    else if (dayshiftCount > 0 && dayshiftCount < 4) { summaryCellUpdate(getComputeElementD, '1.2vw', '1px 2px 5px black', 'red', dayshiftCount) } 
    else if (dayshiftCount === 4) { summaryCellUpdate(getComputeElementD, '1.2vw', '1px 2px 5px black', 'yellow', dayshiftCount) } 
    else if (dayshiftCount >= 5) { summaryCellUpdate(getComputeElementD, '1.2vw', '1px 2px 5px black', 'lightgreen', dayshiftCount) }

    if (nightshiftCount === 0) { summaryCellUpdate(getComputeElementN, '0.5vw', 'none', white, '-') } 
    else if (nightshiftCount > 0 && nightshiftCount < 4) { summaryCellUpdate(getComputeElementN, '1.2vw', '1px 2px 5px black', 'red', nightshiftCount) } 
    else if (nightshiftCount === 4) {summaryCellUpdate(getComputeElementN, '1.2vw', '1px 2px 5px black', 'yellow', nightshiftCount) }
    else if (nightshiftCount >= 5) {summaryCellUpdate(getComputeElementN, '1.2vw', '1px 2px 5px black', 'lightgreen', nightshiftCount) }
}

const summaryCellUpdate = (element, size, shadow, color, textcontent) => {
    element.style.fontSize = size
    element.style.textShadow = shadow
    element.style.color = color
    element.textContent = textcontent
}

//Resize summary grid on page resize
function updateWidth (element) {
    document.querySelector("body > div.summaryContainer > div.summaryLeftPanel").style.width = document.querySelector("#line\\ 1").offsetWidth + 'px'
    document.querySelector(`#operatorsD\\ ${element}`).style.width = document.querySelector(`#Operator\\ 1\\ ${element}`).offsetWidth + 'px'
    document.querySelector(`#shiftleaderD\\ ${element}`).style.width = document.querySelector(`#Operator\\ 1\\ ${element}`).offsetWidth + 'px'
    document.querySelector(`#operatorsN\\ ${element}`).style.width = document.querySelector(`#Operator\\ 1\\ ${element}`).offsetWidth + 'px'
    document.querySelector(`#shiftleaderN\\ ${element}`).style.width = document.querySelector(`#Operator\\ 1\\ ${element}`).offsetWidth + 'px'
}

function resizeWidth () {
    for (i = 1; i <= monthDays; i++) {
        updateWidth(i)
    }
}

resizeWidth()

window.addEventListener('resize', ()=> {
    resizeWidth()
})