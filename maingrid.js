const maingridContainer = document.querySelector('.mainGrid')
let falseArray = [false, false, false, false, false]
let [dayshift, nightshift, vacation, paragraf, freeshift] = falseArray

function controlPanelReset(id) {
    [dayshift, nightshift, vacation, paragraf, freeshift] = falseArray
    $('.controlPanel').children().css({'border-color': 'black' })
    document.getElementById(id).style.borderColor = 'chartreuse'
}

function setup(id) {
    switch (id) {
        case 'dayshift': controlPanelReset(id), dayshift = true
        break;
        case 'nightshift': controlPanelReset(id), nightshift = true
        break;
        case 'vacation': controlPanelReset(id), vacation = true
        break;
        case 'paragraf': controlPanelReset(id), paragraf = true
        break;
        case 'freeshift': controlPanelReset(id), freeshift = true
        break;
        default: ;
    }
}

//Click to invoke proper function shift
$(maingridContainer).children().click((event)=>{
    console.log('Clicked ID is ' + event.target.id)
    let clickedIdSplit = event.target.id.split(' ')
    if (clickedIdSplit[0] === 'Operator') {
        if (event.target.id){
            if (dayshift){
                editorMode = true
                shiftFunction(event, dayShiftBackgroundColor, 'D', 'black')
                summaryFunction(event.target.id, 'D')//function is defined in summaryGrid.js
            } else if (nightshift) {
                editorMode = true
                shiftFunction(event, nightShiftBackgroundColor, 'N', 'black')
                summaryFunction(event.target.id, 'N')//function is defined in summaryGrid.js
            } else if (vacation) {
                editorMode = false
                shiftFunction(event, vacationBackgroundColor, 'V', white)
                skuska(clickedIdSplit)
                summaryOperatorsCount(clickedIdSplit)
            } else if (paragraf) {
                editorMode = false
                shiftFunction(event, paragrafColor, 'P', white)
                skuska(clickedIdSplit)
                summaryOperatorsCount(clickedIdSplit)
            } else if (freeshift) {
                editorMode = false
                shiftFunction(event, freeShiftBackgroundColor, '-', white)
                skuska(clickedIdSplit)
                summaryOperatorsCount(clickedIdSplit)
            }
        } 
    }
})

function shiftFunction(event, color, shift, textColor) {
    event.target.style.background = color
    event.target.textContent = shift
    event.target.style.color = textColor
}

//Doubleclick to reset
$(maingridContainer).children().dblclick((event)=>{
    let clickedIdSplit = event.target.id.split(' ')
    if (clickedIdSplit[0] === 'Operator') {
        event.target.style.background = 'none'
        event.target.textContent = '-'
        event.target.style.color = white
        summaryOperatorsCount(clickedIdSplit)
        if (editorMode === true) {
            skuska(clickedIdSplit)
        }
    }
    //if founds weekend/holiday set to respective color
    for (x of saturdayArray) {
        if (clickedIdSplit[2] === x){
            event.target.style.backgroundColor = saturdayColor
            event.target.style.color = white
            event.target.textContent = '-'
        }
    }

    for (y of sundayArray) {
        if (clickedIdSplit[2] === y) {
            event.target.style.backgroundColor = sundayColor
            event.target.style.color = white
            event.target.textContent = '-'
        }
    }

    for (z of currentHolidayMonth) {
        if (clickedIdSplit[2] == z) {
            event.target.style.backgroundColor = holidayColor
            event.target.style.color = white
            event.target.textContent = '-'
        }
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
        default: ;
    }
})