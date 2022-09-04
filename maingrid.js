const maingridContainer = document.querySelector('.mainGrid')
let falseArray = [false, false, false, false, false, false, false]
let [dayshift, nightshift, vacation, paragraf, freeshift, remove, shiftleader] = falseArray

function controlPanelReset(id) {
    [dayshift, nightshift, vacation, paragraf, freeshift, remove, shiftleader] = falseArray
    $('.controlPanel').children().css({'outline' : 'none' })
        document.getElementById(id).style.outline = '3px solid #00e673'
}

function setup(id) {
    controlPanelReset(id)
    switch (id) {
        case 'dayshift': dayshift = true
            break;
        case 'nightshift': nightshift = true
            break;
        case 'vacation': vacation = true
            break;
        case 'paragraf': paragraf = true
            break;
        case 'freeshift': freeshift = true
            break;
        case 'remove': remove = true
            break;
        case 'shiftleader': shiftleader = true
            default:;
    }
}

//Click to invoke proper function shift
$(maingridContainer).children().click((event)=>{
    console.log('Clicked ID is ' + event.target.id)
    let clickedIdSplit = splitId(event.target)
    if (clickedIdSplit[0] === 'Operator') {
        if (event.target.id){
            if (dayshift){
                popSLfromSummaryGrid (event.target)
                shiftCellStyle(event, dayShiftBackgroundColor, 'D', 'black')
                summaryOperatorsCount(clickedIdSplit)
            } else if (nightshift) {
                popSLfromSummaryGrid(event.target)
                shiftCellStyle(event, nightShiftBackgroundColor, 'N', 'black')
                summaryOperatorsCount(clickedIdSplit)
            } else if (vacation) {
                popSLfromSummaryGrid(event.target)
                shiftCellStyle(event, vacationBackgroundColor, 'V', white)
                summaryOperatorsCount(clickedIdSplit)
            } else if (paragraf) {
                popSLfromSummaryGrid(event.target)
                shiftCellStyle(event, paragrafColor, 'P', white)
                summaryOperatorsCount(clickedIdSplit)
            } else if (freeshift) {
                popSLfromSummaryGrid(event.target)
                shiftCellStyle(event, freeShiftBackgroundColor, '-', white)
                summaryOperatorsCount(clickedIdSplit)
            } else if (shiftleader) {
                slCellColor(event.target)
//RESETING CELL FROM HERE------------------------------------
            } else if (remove) {
                popSLfromSummaryGrid(event.target)
                shiftCellStyle(event, 'rgba(255,255,255,0)', '-', white)
                summaryOperatorsCount(clickedIdSplit)
//if founds weekend/holiday resets to respective color
            for (x of saturdayArray) {
                if (clickedIdSplit[2] === x){
                    shiftCellStyle(event, saturdayColor, '-', white)
                }
            }
            for (y of sundayArray) {
                if (clickedIdSplit[2] === y) {
                    shiftCellStyle(event, sundayColor, '-', white)
                }
            }
            for (z of currentHolidayMonth) {
                if (clickedIdSplit[2] == z) {
                    shiftCellStyle(event, holidayColor, '-', white)
                }
            }
            }
        } //Tooltip update + save operators data
        saveOperatorArrayData(clickedIdSplit)
        document.getElementById(`line ${clickedIdSplit[1]}`).title = updateTooltip(operatorsArray[clickedIdSplit[1]-1].workday)
        tooltipRender()
    }
})

//Keyboard Control Panel
document.addEventListener('keydown',(event)=>{
    switch(event.key){
        case 'd': setup('dayshift')
            break;
        case 'n': setup('nightshift')
            break;
        case 'v': setup('vacation')
            break;
        case 'p': setup('paragraf')
            break;
        case 'f': setup('freeshift')
            break;
        case ' ': setup('remove')
            break;
        case 's': setup('shiftleader')
            break;
            default: ;
    }
})

function shiftCellStyle(event, color, shift, textColor, id) {
    let getId
    event ? getId = event.target : getId = id
    getId.style.background = color
    getId.textContent = shift
    getId.style.color = textColor
}

function slCellColor (element) {
    let id = splitId(element)
    let column = id[2]

    if (shiftleader && operatorsArray[id[1] - 1].shiftleader) {
        checkSL(element, 'D', column, 'shiftleaderD')
        checkSL(element, 'N', column, 'shiftleaderN')
    }
}

function checkSL (element, shift, column, shiftGrid) {
    if (element.textContent === shift ) {
        for (i = 0; i < operatorsArray.length; i++) {
            let columnCell = document.getElementById(`Operator ${i + 1} ${column}`)
            if (columnCell.textContent === shift) {
                columnCell.style.background = dayShiftBackgroundColor
            }
        }
        element.style.background = SLcellColor
        let clickedOperator = splitId(element)[1]
        let operator = operatorsArray[clickedOperator - 1]. realName
        let x = document.getElementById(`${shiftGrid} ${column}`)
        x.style.color = 'wheat'
        x.style.textShadow = '1px 2px 5px black'
        x.textContent = operator
        saveSLArray (event.target.textContent, operator, column)
    }
}

function popSLfromSummaryGrid (e) {
    if (e.style.background === 'linear-gradient(320deg, rgb(252, 208, 61) 0%, rgb(255, 231, 0) 100%)') {
        let x = splitId(e)
        let y = x[2]
        if (e.textContent === 'D') {
            summaryCellUpdate(getElementColumn(e, 'shiftleaderD'), '13px', 'none', white, '-')
            dSLArray[y] = '-'
        } else if (e.textContent === 'N') {
            summaryCellUpdate(getElementColumn(e, 'shiftleaderN'), '13px', 'none', white, '-')
            nSLArray[y] = '-'
        }
    }
}

function getElementColumn (clickedElement, targetElementId) {
    let splitElement = splitId(clickedElement)
    let column = splitElement[2]
    return document.getElementById(`${targetElementId} ${column}`)
}


//Mozem hodit operatorov do 2 poli pre D a N zmeny a po nacitani vytiahnut data z tamade a vyrenderovat mena SL