const gridContainer = document.querySelector('.operators-grid-container')

//Shift leader styling
const shiftleaderColor = (shiftleader, column) => {
    if (shiftleader) column.style.backgroundColor = shiftLeaderColor
}

//Main Grid creation loop - grid with textContent '-'
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
    
//Left panel operators creation

for (i = 0; i < operatorsArray.length; i++){
    let columnOperator = new NewElement('div', 'id', 'line ' + (i + 1), operatorsArray[i].realName, gridContainer)
    columnOperator.createNewElement()
    shiftleaderColor(operatorsArray[i].shiftleader, columnOperator.elType)
    $(columnOperator.elType).attr('data-bs-toggle', 'tooltip')
    $(columnOperator.elType).attr('data-bs-html', 'true')
    columnOperator.elType.title = updateTooltip(operatorsArray[i], operatorsArray[i].shiftleader)
}

//SPRAVIT CYKLUS NA TOOLTIP
function firstTooltipRender () {
    for (x in operatorsArray) {
        let xToNumber = Number(x) + 1
        document.getElementById(`line ${xToNumber}`).title = updateTooltip(operatorsArray[x], operatorsArray[x].shiftleader)
    }
    tooltipRender ()
}

//Bootstrap tooltip
function tooltipRender () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}

function updateTooltip (object, shiftleader) {
    let [D, N, V, P, SL] = [0, 0, 0, 0, 0]
    for (count of object.workday) {
        if (count === 'D') D++ 
        else if (count === 'N') N++
        else if (count === 'V') V++
        else if (count === 'P') P++
    }

    for (let i = 1; i <= monthDays; i++) {
        if (object.realName === dSLArray[i] || object.realName === nSLArray[i]) SL++
    }

    return shiftleader ? `D - ${D} <br>N - ${N} <br>V - ${V} <br>P - ${P} <br>SL - ${SL}` : `D - ${D} <br>N - ${N} <br>V - ${V} <br>P - ${P}`
}

tooltipRender ()