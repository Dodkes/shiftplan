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

//Main Grid creation loop
function mainGrid () {
    let dayLoop = 1
    let operatorLoop = 0
    for (i = 0; i < monthDays * operatorsArray.length; i++){
        let gridUnit = document.createElement('div')
        mainGridContainer.appendChild(gridUnit)
        gridUnit.textContent = '-'
        gridUnit.style.color = 'white'
        
        if (dayLoop <= monthDays) {
            $(gridUnit).attr('id', operatorsArray[operatorLoop].name + ' ' + dayLoop)
            operatorsArray[operatorLoop].operatorDay.push(dayLoop)
            dayLoop++
        } else {
            dayLoop = 1
            operatorLoop++
            $(gridUnit).attr('id', operatorsArray[operatorLoop].name + ' ' + dayLoop)
            operatorsArray[operatorLoop].operatorDay.push(dayLoop)
            dayLoop++
        }
    }
}

mainGrid()