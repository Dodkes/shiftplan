const mobileWorkPlanButton = document.getElementById('mobile-work')
const shiftPlanButton = document.getElementById('shiftplan-button')
const mobileWorkButton = document.getElementById('mobile')
const inOfficeButton = document.getElementById('in-office')
const spTitle = document.getElementById('shiftplan-title')
let [inOffice, mobileWork] = [false, false]
const fadeSpeed = 200
mobileWorkPlanButton.addEventListener('click', () => {
    shiftPlanSwitch = false
    controlPanelReset(null)
    $('.mainGrid').fadeOut(fadeSpeed)
    $('.controlPanel').slideUp(fadeSpeed)

    setTimeout(() => {
        let dayLoop = 1
        let operatorLoop = 0
        for (i = 0; i < monthDays * operatorsArray.length; i++){
            if (dayLoop <= monthDays) {
                blankCell(document.getElementById(operatorsArray[operatorLoop].name + ' ' + dayLoop))
                dayLoop++
            } else {
                dayLoop = 1
                operatorLoop++
                blankCell(document.getElementById(operatorsArray[operatorLoop].name + ' ' + dayLoop))
                dayLoop++
            }
        }
        ['dayshift', 'nightshift', 'vacation', 'paragraf', 'freeshift', 'shiftleader', 'remove', 'reset', 'mobile-work'].forEach(hideButtons)

        spTitle.style.color = '#1aff66'
        spTitle.textContent = 'Mobile work - '
        document.getElementById('currentMonth').textContent = currentMonth
    
        showButtons('mobile')
        showButtons('in-office')
        showButtons('shiftplan-button')
    }, fadeSpeed)
    
    $('.mainGrid').fadeIn(fadeSpeed)
    $('.controlPanel').slideDown(fadeSpeed)

})

const blankCell = (cell) => {
    if (cell.textContent === 'D' || cell.textContent === 'N') {
        let operator = splitId(cell)[1] - 1
        let day = splitId(cell)[2]
        if (operatorsArray[operator].mobileWorkDay[day] === true) {
            cell.style.background = mobileWorkCellColor
        } else {
            cell.style.background = dayShiftBackgroundColor
        }
    }
}

const hideButtons = (button) => {
    document.getElementById(button).style.display = 'none'
}

const showButtons = (cell) => {
    document.getElementById(cell).style.display = 'inline-block'
}

shiftPlanButton.addEventListener('click', () => {
    shiftPlanSwitch = true
    resetButtons()
    $('.mainGrid').fadeOut(fadeSpeed)
    $('.controlPanel').slideUp(fadeSpeed)
    
    setTimeout(() => {
        ['dayshift', 'nightshift', 'vacation', 'paragraf', 'freeshift', 'shiftleader', 'remove', 'reset', 'mobile-work'].forEach(showButtons)
        hideButtons('mobile')
        hideButtons('in-office')
        hideButtons('shiftplan-button')
        renderGridFromLocalStorage()

        spTitle.style.color = 'white'
        spTitle.textContent = 'Shiftplan - '
        document.getElementById('currentMonth').textContent = currentMonth

    }, fadeSpeed)

    $('.mainGrid').fadeIn(fadeSpeed)
    $('.controlPanel').slideDown(fadeSpeed)
})

//Office / Mobile work buttons functionality

mobileWorkButton.addEventListener('click', () => {
    MWSet (true, false, mobileWorkButton)
})

inOfficeButton.addEventListener('click', () => {
    MWSet (false, true, inOfficeButton)
})

document.addEventListener('keydown', (event) =>{
    if (!shiftPlanSwitch) {
        switch (event.key) {
            case 'm': MWSet (true, false, mobileWorkButton)
                break;
            case 'o': MWSet (false, true, inOfficeButton)
                break;
            default: ;
        }
    }
})

function resetButtons () {
    inOffice, mobileWork = false, false
    mobileWorkButton.style.outline = 'none'
    inOfficeButton.style.outline = 'none'
}

const setShift = (e) => {
    if (e.textContent === 'D' || e.textContent === 'N'){
        if (mobileWork) {
            e.style.background = mobileWorkCellColor
            saveMobileWork(e, true)
        } else if (inOffice) {
            e.style.background = dayShiftBackgroundColor
            saveMobileWork(e, null)
        }
    }
}

function MWSet (mobile, office, button) {
    if (!shiftPlanSwitch) {
        resetButtons()
        mobileWork = mobile
        inOffice = office
        button.style.outline = '0.2em solid #00e673'
    }
}

function saveMobileWork (e, shift) {
    let operator = operatorsArray[Number(splitId(e)[1] - 1)]
    let index = Number(splitId(e)[2])
    operator.mobileWorkDay[index] = shift
    console.log(operator.mobileWorkDay)
}