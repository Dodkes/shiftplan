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
    $(columnOperator.elType).attr('data-bs-toggle', 'tooltip')
    $(columnOperator.elType).attr('data-bs-html', 'true')
    columnOperator.elType.title = updateTooltip(operatorsArray[i].workday)
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

//Bootstrap tooltip
function tooltipRender () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}

function updateTooltip (array) {
    let [D, N, V, P] = [0, 0, 0, 0]
    for (count of array) {
        if (count === 'D') { D++ } 
        else if (count === 'N') { N++ }
        else if (count === 'V') { V++ }
        else if (count === 'P') { P++ }
    }

    return `D - ${D} <br>N - ${N} <br>V - ${V} <br>P - ${P}`
}

tooltipRender ()