const summaryGrid = document.querySelector('.summaryGridContainer')

//Set current day color top panel------------------------------------
let currentDay = date.getDate()
let currentDayMonth = 'topLineMonth ' + currentDay
let currentDayDay = 'topLineDay ' + currentDay
let topLineDay = document.getElementById(currentDayDay)
let topLineMonth = document.getElementById(currentDayMonth)
topLineDay.style.backgroundColor = currentDayColor
topLineMonth.style.backgroundColor = currentDayColor
//-------------------------------------------------------------------

$('.summaryGridContainer').css('grid-template-columns', gridColumns)

const sumGrid = (operators) => {
    for (i = 0; i < monthDays; i++) {
        let newElement = document.createElement('div')
        summaryGrid.appendChild(newElement)
        newElement.textContent = '-'
        $(newElement).attr('id', operators + ' ' + (i+1))
        $(newElement).addClass('sumGrid')
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
}

//Summary info setup - function is called from maingrid.js on click event
function summaryFunction(e, shift) {
    let splitId = e.split(' ')
    splitId[1]
    let selectedOperator = splitId[1] - 1
    console.log(operatorsArray[selectedOperator].realName)
    if (operatorsArray[selectedOperator].shiftleader === true && shift === 'D') {
        let summarySLCell = document.getElementById('shiftleaderD ' + splitId[2])
        summarySLCell.textContent = operatorsArray[selectedOperator].realName
        $(summarySLCell).addClass('summaryCellStyleDayshift')
    }
    if (operatorsArray[selectedOperator].shiftleader && shift === 'N') {
        let summaryCell = document.getElementById('shiftleaderN ' + splitId[2])
        summaryCell.textContent = operatorsArray[selectedOperator].realName
        $(summaryCell).addClass('summaryCellStyleNightshift')
    }
    summaryOperators(splitId)
}
//on dblclick vyresetovat bunku v summary grid - funkciu mozem definovat tu a vyvolat ju v dbl click evente

function summaryOperators(id) {
    let dayshiftCount = 0
    let nightshiftCount = 0
    for (i = 1; i <= operatorsArray.length; i++) {
        let columnLoop = document.getElementById('Operator ' + i + ' ' + id[2])
        if (columnLoop.textContent === 'D') {
            dayshiftCount++
        } else if (columnLoop.textContent === 'N') {
            nightshiftCount++
        }
    }
    let getComputeElementD = document.getElementById('operatorsD ' + id[2])
    let getComputeElementN = document.getElementById('operatorsN ' + id[2])
    
    getComputeElementD.textContent = dayshiftCount
    getComputeElementN.textContent = nightshiftCount

    getComputeElementN.style.fontSize = '20px'
    getComputeElementD.style.fontSize = '20px'


    if (dayshiftCount === 0) {
        getComputeElementD.textContent = '-'
        getComputeElementD.style.color = 'white'
        getComputeElementD.style.fontSize = '13px'
    } else if (dayshiftCount > 0 && dayshiftCount < 4) {
        getComputeElementD.style.color = 'red'
    } else if (dayshiftCount >= 4) {
        getComputeElementD.style.color = 'lightgreen'
    }

    if (nightshiftCount === 0) {
        getComputeElementN.textContent = '-'
        getComputeElementN.style.color = 'white'
        getComputeElementN.style.fontSize = '13px'
    } else if (nightshiftCount > 0 && nightshiftCount < 4) {
        getComputeElementN.style.color = 'red'
    } else if (nightshiftCount >= 4) {
        getComputeElementN.style.color = 'lightgreen'
        
    }
}