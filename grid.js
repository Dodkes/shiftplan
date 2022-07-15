const gridContainer = document.querySelector('.operators-grid-container')
//Left panel operators creation
for (i = 0; i < operatorsArray.length; i++){
    let column = document.createElement('div')
    gridContainer.appendChild(column)
    column.textContent = operatorsArray[i].name
    shiftleaderColor(operatorsArray[i].shiftleader, column)
    $(column).attr('id', 'line ' + (i + 1))
}

//Shift leader styling function
function shiftleaderColor(shiftleader, column){
    if (shiftleader == true){
        column.style.backgroundColor = '#666699'
    }
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