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
}

//Summary info setup - function is called from maingrid.js on click event
//this function textcontent shiftleader realname
function summaryFunction(splitId, shift) {
    splitId[1]
    let selectedOperator = splitId[1] - 1

    let dayCell = document.getElementById('shiftleaderD ' + splitId[2])
    let nightCell = document.getElementById('shiftleaderN ' + splitId[2])
    

    if (operatorsArray[selectedOperator].shiftleader === true && shift === 'D') {
        dayCell.textContent = operatorsArray[selectedOperator].realName
        $(dayCell).addClass('summaryCellStyleDayshift')
        if (operatorsArray[selectedOperator].realName === nightCell.textContent) {
            nightCell.textContent = '-'
        }
    }
    if (operatorsArray[selectedOperator].shiftleader && shift === 'N') {
        nightCell.textContent = operatorsArray[selectedOperator].realName
        $(nightCell).addClass('summaryCellStyleNightshift')
        if (operatorsArray[selectedOperator].realName === dayCell.textContent) {
            dayCell.textContent = '-'
        }
    }
    summaryOperatorsCount(splitId)
}
//On REMOVE event reset cell and get another SL
function summaryRecountSL(id) {
    let index = id[1] - 1
    let index2 = id[2]
    let slID = document.getElementById('shiftleaderD ' + index2)
    let slIDN = document.getElementById('shiftleaderN ' + index2)
    if (operatorsArray[index].realName === slID.textContent) {
        slID.textContent = '-'
    } else if (operatorsArray[index].realName === slIDN.textContent) {
        slIDN.textContent = '-'
    }
//if clicked on SL, get another SL and put in summary cell
    if (operatorsArray[index].shiftleader === true){
        for (i = 1; i <= operatorsArray.length; i++) {
            let columnLoop = document.getElementById('Operator ' + i + ' ' + id[2])
            if (slID.textContent === '-') {
                if (columnLoop.textContent === 'D') {
                    if (operatorsArray[i-1].shiftleader === true) {
                        slID.textContent = operatorsArray[i-1].realName
                    }
                }
            }
            if (slIDN.textContent === '-') {
                if (columnLoop.textContent === 'N') {
                    if (operatorsArray[i-1].shiftleader === true) {
                        slIDN.textContent = operatorsArray[i-1].realName
                    }
                }
            }
        }
    }
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
    if (dayshiftCount === 0) { summaryCellUpdate(getComputeElementD, '13px', 'none', white, '-') } 
    else if (dayshiftCount > 0 && dayshiftCount < 4) { summaryCellUpdate(getComputeElementD, '1.2vw', '1px 2px 5px black', 'red', dayshiftCount) } 
    else if (dayshiftCount === 4) { summaryCellUpdate(getComputeElementD, '1.2vw', '1px 2px 5px black', 'yellow', dayshiftCount) } 
    else if (dayshiftCount >= 5) { summaryCellUpdate(getComputeElementD, '1.2vw', '1px 2px 5px black', 'lightgreen', dayshiftCount) }

    if (nightshiftCount === 0) { summaryCellUpdate(getComputeElementN, '13px', 'none', white, '-') } 
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