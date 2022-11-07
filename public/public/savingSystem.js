//After click on maingrid cell check textContent and push into object
const saveOperatorArrayData = (operatorId) => {
    let currentOperatorArray = operatorsArray[operatorId[1] - 1].workday

    for (let i = 1; i <= monthDays; i++) {
        let lineUnit = document.getElementById('Operator ' + operatorId[1] + ' ' + i)
        switch (lineUnit.textContent) {
            case 'D': currentOperatorArray[i] = 'D'
                break;
            case 'N' : currentOperatorArray[i] = 'N'
                break;
            case 'V' : currentOperatorArray[i] = 'V'
                break;
            case 'P' : currentOperatorArray[i] = 'P'
                break;
            case '-': currentOperatorArray[i] = '-'
                break;
            case 'x': currentOperatorArray[i] = 'x'
                break;
            default: ;
        }
    }
    saveToLocalStorage()
}

function saveToLocalStorage () {
    myJSON = JSON.stringify(operatorsArray)
    localStorage.setItem('operatorsJSON', myJSON)
    operatorsArray = JSON.parse(localStorage.getItem('operatorsJSON'))

    //SL main grid save - TOTO BY MALO FUNGOVAT
    sldJSON = JSON.stringify(dSLArray)
    slnJSON = JSON.stringify(nSLArray)

    localStorage.setItem('sldJSON', sldJSON)
    localStorage.setItem('slnJSON', slnJSON)

    dSLArray = JSON.parse(localStorage.getItem('sldJSON'))
    nSLArray = JSON.parse(localStorage.getItem('slnJSON'))
}

const resetLocalStorage = () => {
    localStorage.clear()
    location.reload()
}

function renderGridFromLocalStorage () {
    data = JSON.parse(localStorage.getItem('operatorsJSON'))
    
    for (x of operatorsArray) {
        let operator = x.name
        for (y in x.workday) {
            switch (x.workday[y]) {
                case 'D': loadCellData(operator, y, 'D', dayShiftBackgroundColor, 'black')
                    break;
                case 'N' : loadCellData(operator, y, 'N', nightShiftBackgroundColor, 'black')
                    break;
                case 'V' : loadCellData(operator, y, 'V', vacationBackgroundColor, white)
                    break;
                case 'P' : loadCellData(operator, y, 'P', paragrafColor, white)
                    break;
                case 'x': loadCellData(operator, y, 'x', freeShiftBackgroundColor, white)
                default: ;
            }
        }
    }

    renderSLNamesSLCellColors (dSLArray, 'shiftleaderD', 'D')
    renderSLNamesSLCellColors (nSLArray, 'shiftleaderN', 'N')
}

//Render SL names in summary grid + SL cell colors
function renderSLNamesSLCellColors (array, gridElement, shift) {
    for (sl in array) {
        let el = document.getElementById(`${gridElement} ${sl}`)
        if (array[sl] !== null) {
            el.textContent = array[sl]
            el.style.color = 'wheat'
            el.style.textShadow = '1px 2px 5px black'

            for(operator of operatorsArray) {
                if (array[sl] === operator.realName) {
                    let slCellElement = document.getElementById(`${operator.name} ${sl}`)
                    if (slCellElement.textContent === shift) {
                        slCellElement.style.background = SLcellColor
                    }
                }
            }
        } 
    }
}

renderGridFromLocalStorage()

function loadCellData (halfId, day, shift, color, textColor) {
    let cellId = document.getElementById(halfId + ' ' + day)
    cellId.textContent = shift
    shiftCellStyle(null, color, shift, textColor, cellId)
}


// Reload summaryGrid according to mainGrid data loaded from local storage
var myArray = []
function loadData () {
    for (i = 1; i <= monthDays; i++) {
        let a = document.getElementById('Operator 1 ' + i)
        let b = splitId(a)
        myArray.push(b)
    }
}

loadData()

myArray.forEach(element => {
    summaryOperatorsCount(element)
});

// Save SL names in summary grid
function saveSLArray (shift, name, day) {
    if (shift === 'D') {
        dSLArray[day] = name
    } else if (shift === 'N') {
        nSLArray[day] = name
    }
}


//SAVING DATA TO SERVER
setInterval(saveToServer, 60000)

function saveToServer () {
    fetch('/api', {method: 'POST', headers: { 'Content-Type' : 'application/json'}, body: JSON.stringify(operatorsArray)})
    console.log('%c Data saved: ' + new Date(), 'background: black; color: #bada55; border: 1px solid #bada55')
}