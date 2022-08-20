const gridContainer = document.querySelector('.operators-grid-container')

//Shift leader styling
const shiftleaderColor = (shiftleader, column) => {
    if (shiftleader == true){
        column.style.backgroundColor = shiftLeaderColor
    }
}

//Left panel operators creation
for (i = 0; i < operatorsArray.length; i++){
    let columnOperator = new NewElement('div', 'id', 'line ' + (i + 1), operatorsArray[i].realName, gridContainer)
    columnOperator.createNewElement()
    shiftleaderColor(operatorsArray[i].shiftleader, columnOperator.elType)
}

//Main Grid creation loop - grid with textContent -
const mainGrid = () => {
    let dayLoop = 1
    let operatorLoop = 0
    for (i = 0; i < monthDays * operatorsArray.length; i++){
        if (dayLoop <= monthDays) {
            let gridUnit = new NewElement('div', 'id', operatorsArray[operatorLoop].name + ' ' + dayLoop, '-', mainGridContainer)
            gridUnit.createNewElement()
            dayLoop++
        } else {
            dayLoop = 1
            operatorLoop++
            let gridUnit = new NewElement('div', 'id', operatorsArray[operatorLoop].name + ' ' + dayLoop, '-', mainGridContainer)
            gridUnit.createNewElement()
            dayLoop++
        }
    }
}

mainGrid()