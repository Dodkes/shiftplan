const maingridContainer = document.querySelector('.mainGrid')
let falseArray = [false, false, false, false, false, false]
let [dayshift, nightshift, vacation, paragraf, freeshift, remove] = falseArray

function controlPanelReset(id) {
    [dayshift, nightshift, vacation, paragraf, freeshift, remove] = falseArray
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
                editorMode = true
                shiftCellStyle(event, dayShiftBackgroundColor, 'D', 'black')
                summaryRecountSL(clickedIdSplit)
                summaryFunction(clickedIdSplit, 'D')//function is defined in summaryGrid.js
            } else if (nightshift) {
                editorMode = true
                shiftCellStyle(event, nightShiftBackgroundColor, 'N', 'black')
                summaryRecountSL(clickedIdSplit)
                summaryFunction(clickedIdSplit, 'N')//function is defined in summaryGrid.js
            } else if (vacation) {
                editorMode = false
                shiftCellStyle(event, vacationBackgroundColor, 'V', white)
                summaryRecountSL(clickedIdSplit)
                summaryOperatorsCount(clickedIdSplit)
            } else if (paragraf) {
                editorMode = false
                shiftCellStyle(event, paragrafColor, 'P', white)
                summaryRecountSL(clickedIdSplit)
                summaryOperatorsCount(clickedIdSplit)
            } else if (freeshift) {
                editorMode = false
                shiftCellStyle(event, freeShiftBackgroundColor, '-', white)
                summaryRecountSL(clickedIdSplit)
                summaryOperatorsCount(clickedIdSplit)
//RESETING CELL FROM HERE------------------------------------
            } else if (remove) {
                shiftCellStyle(event, 'rgba(255,255,255,0)', '-', white)
                summaryOperatorsCount(clickedIdSplit)
                if (editorMode === true) {
                    summaryRecountSL(clickedIdSplit)
                }
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
        } 
        saveOperatorArrayData(clickedIdSplit)
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