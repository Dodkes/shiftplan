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
            default: ;
        }
    }
    saveToLocalStorage()
}

function saveToLocalStorage () {
    myJSON = JSON.stringify(operatorsArray)
    localStorage.setItem('operatorsJSON', myJSON)
    operatorsArray = JSON.parse(localStorage.getItem('operatorsJSON'))
    console.log(operatorsArray)
}

const resetLocalStorage = () => {
    localStorage.clear()
    location.reload()
}

function renderGridFromLocalStorage () {
    data = JSON.parse(localStorage.getItem('operatorsJSON'))
    console.log(data)
    
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
                default: ;
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

//Local storage mi nevymazava po stlaceni space
//spravit najprv render from local storage funkciu ktora sa vyvola po nacitani stranky lebo
//neni potrebne renderovat po kazdom clicku