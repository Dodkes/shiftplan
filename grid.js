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
    console.log(operatorsArray)
}

mainGrid()

//SKONCIL SOM VO FUNKCII mainGrid a scripte maingrid.js
//Po kliknuti na akukolvek bunku mi vykonzoluje konkretne ID coz je operator + kalendarny den
//pre priklad ID "Operator 8 31" znamena ze je to operator c. 8 a klikol som na 31. den
//zaroven som kazdemu operatorovi pushol do operatorDay[] cislo dna - MOZNO ZBYTOCNE NEVIEM CI TO MA VYUZITIE
//Skusit nastavit jednotlivym cislam dni true alebo false hodnoty aby som vedel fungovat

//Prist na sposob ako prisupovat ku konkretnym dnom konkretnych operatorov



