//Function that updates operatorsArray workdays
const saveOperatorArrayData = (operatorId) => {
    let operatorWorkdayArray = operatorsArray[operatorId[1] - 1].workday
    
    for (let i = 1; i <= monthDays; i++) {
        let lineUnit = document.getElementById('Operator ' + operatorId[1] + ' ' + i)
        switch (lineUnit.textContent) {
            case 'D': operatorWorkdayArray[i] = 'D'
                break;
            case 'N' : operatorWorkdayArray[i] = 'N'
                break;
            case 'V' : operatorWorkdayArray[i] = 'V'
                break;
            case 'P' : operatorWorkdayArray[i] = 'P'
                break;
            case '-': operatorWorkdayArray[i] = '-'
                break;
            case 'x': operatorWorkdayArray[i] = 'x'
                break;
            default: ;
        }
    }
}

const resetSP = () => {
    if (confirm('CONFIRM SHIFTPLAN RESET')) {
        resetOperatorsArray()
        dSLArray = []
        nSLArray = []
        postApiToServer()
        location.reload()
    } 
}

function renderMainGrid () {
    data = operatorsArray

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

renderMainGrid()

function loadCellData (halfId, day, shift, color, textColor) {
    let cellId = document.getElementById(halfId + ' ' + day)
    cellId.textContent = shift
    shiftCellStyle(null, color, shift, textColor, cellId)
}

// Reload summaryGrid according to mainGrid data loaded from local storage
function sumGridCounterUpdate() {
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
}

sumGridCounterUpdate()

// Save SL names in summary grid
function saveSLArray (shift, name, day) {
    if (shift === 'D') {
        dSLArray[day] = name
    } else if (shift === 'N') {
        nSLArray[day] = name
    }
}