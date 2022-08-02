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
//this function textcontent shiftleader realname
function summaryFunction(e, shift) {
    let splitId = e.split(' ')
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
//on dblclick vyresetovat bunku v summary grid - funkciu mozem definovat tu a vyvolat ju v dbl click evente


function skuska(id) {
    let index = id[1] - 1
    let index2 = id[2]
    let slID = document.getElementById('shiftleaderD ' + index2)
    let slIDN = document.getElementById('shiftleaderN ' + index2)
    if (operatorsArray[index].realName === slID.textContent) {
        slID.textContent = '-'
    } else if (operatorsArray[index].realName === slIDN.textContent) {
        slIDN.textContent = '-'
    }

    if (operatorsArray[index].shiftleader === true){
        for (i = 1; i <= operatorsArray.length; i++) {
            let columnLoop = document.getElementById('Operator ' + i + ' ' + id[2])
            if (columnLoop.textContent === 'D') {
                if (operatorsArray[i-1].shiftleader === true) {
                    slID.textContent = operatorsArray[i-1].realName
                }
            }
    
            if (columnLoop.textContent === 'N') {
                if (operatorsArray[i-1].shiftleader === true) {
                    slIDN.textContent = operatorsArray[i-1].realName
                }
            }
        }
    }
}
//Looping through columns if there is D or N as text content-----------------------------------
function summaryOperatorsCount(id) {
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
    
//Updating cells in summary table----------------------------------------------------
    if (dayshiftCount === 0) {
        summaryCellUpdate(getComputeElementD, '13px', 'none', white, '-')
    } else if (dayshiftCount > 0 && dayshiftCount < 4) {
        summaryCellUpdate(getComputeElementD, '20px', '1px 2px 5px black', 'red', dayshiftCount)
    } else if (dayshiftCount >= 4) {
        summaryCellUpdate(getComputeElementD, '20px', '1px 2px 5px black', 'lightgreen', dayshiftCount)
    }

    if (nightshiftCount === 0) {
        summaryCellUpdate(getComputeElementN, '13px', 'none', white, '-')
    } else if (nightshiftCount > 0 && nightshiftCount < 4) {
        summaryCellUpdate(getComputeElementN, '20px', 'none', 'red', nightshiftCount)
    } else if (nightshiftCount >= 4) {
        summaryCellUpdate(getComputeElementN, '20px', 'none', 'lightgreen', nightshiftCount)
    }
    
}

const summaryCellUpdate = (element, size, shadow, color, textcontent) => {
    element.style.fontSize = size
    element.style.textShadow = shadow
    element.style.color = color
    element.textContent = textcontent
}
//Poriadne preskusat sumamryGrid ci vsetko funguje ako ma ! ! !

//Pred dovolenkou:
//Skoncil som vo funkcii skuska(id), kt. je vyvolana z maingrid.js v dblclick evente
//Problem ako ho fixnut:
//Problem je ze na dbl click event mi zabera aj single click a teda, pokial chcem vymazat
//niekoho kto je jednym zo shiftleaderov a je na zmene ale nema byt na danej zmene shiftleader
//tak mi toho povodneho SL napriek tomu zresetuje

//Fixnut sa to da tak, ze dblclick event nahradim akymkolvek inym, napriklad space-bar eventom
//teda trebalo by pridat dalsi button a prerobit z dblclick an space-bar alebo iny key button

//dalo by sa to fixnut este aj tak, ze na single click event by som nastavil timer, resp aby
//sa klasicka single click funkcia vykonala s delayom, a v double click evente zastavit single click
//funkciu, napr aplikovanim boolean premennou + podmienkou