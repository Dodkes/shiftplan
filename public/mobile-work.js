const mobileWorkPlanButton = document.getElementById('mobile-work')
const shiftPlanButton = document.getElementById('shiftplan-button')
const mobileWorkButton = document.getElementById('mobile')
const inOfficeButton = document.getElementById('in-office')
const spTitle = document.getElementById('shiftplan-title')
const refreshButton = document.getElementById('icon')
let [inOffice, mobileWork] = [false, false]
let buttons = ['dayshift', 'nightshift', 'vacation', 'paragraf', 'freeshift', 'shiftleader', 'remove', 'reset', 'mobile-work', 'save']

const fadeSpeed = 200
//MW plan switch button
function addMobileWorkClickEventListener () {
    mobileWorkPlanButton.addEventListener('click', () => {
        shiftPlanSwitch = false
        controlPanelReset(null)
        $('.mainGrid').fadeOut(fadeSpeed)
        $('.controlPanel').slideUp(fadeSpeed)
    
        setTimeout(() => {
            renderMobileWorkGrid()
            buttons.forEach(hideButtons)
    
            spTitle.style.color = '#1aff66'
            spTitle.textContent = 'Mobile work - '
            document.getElementById('currentMonth').textContent = currentMonth
        
            showButtons('icon')
            showButtons('mobile')
            showButtons('in-office')
            showButtons('shiftplan-button')
        }, fadeSpeed)
        
        $('.mainGrid').fadeIn(fadeSpeed)
        $('.controlPanel').slideDown(fadeSpeed)
    
    })
}



function renderMobileWorkGrid () {
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
}


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
//SP switch button
shiftPlanButton.addEventListener('click', () => {
    shiftPlanSwitch = true
    resetButtons()
    $('.mainGrid').fadeOut(fadeSpeed)
    $('.controlPanel').slideUp(fadeSpeed)
    
    setTimeout(() => {
        buttons.forEach(showButtons)
        hideButtons('mobile')
        hideButtons('in-office')
        hideButtons('shiftplan-button')
        hideButtons('icon')
        renderMainGrid()

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

//SAVE MW TO ARRAY AND RENDER MW ACCORDING THE SERVER DATA
function saveMobileWork (e, shift) {
    fetch('/api')
    .then((res)=> res.text())
    .then((data)=> operatorsArray = JSON.parse(data))
    .then (()=> {
        let operator = operatorsArray[Number(splitId(e)[1] - 1)]
        let index = Number(splitId(e)[2])
        operator.mobileWorkDay[index] = shift
    })
    .then(renderMobileWorkGrid)
    .then(postMWToServer)
}

function removeMobileWorkOnRemoveButton (e, shift) {
    let operator = operatorsArray[Number(splitId(e)[1] - 1)]
    let index = Number(splitId(e)[2])
    operator.mobileWorkDay[index] = shift
}

function postMWToServer () {
    fetch('/api', {method: 'POST', headers: { 'Content-Type' : 'application/json'}, body: JSON.stringify(operatorsArray)})
}

refreshButton.addEventListener('click', () => {
    if (anotationAvailable) {
        fetch('/api')
        .then((res)=> res.text())
        .then((data)=> operatorsArray = JSON.parse(data))
        .then(renderMobileWorkGrid)
        .then(anotation)
        .then(anotationAvailable = false)
    }
})

function anotation () {
    $('#anotation').slideDown('slow')
    setTimeout(() => {
    $('#anotation').slideUp('slow')
    anotationAvailable = true
    }, 2000);
}