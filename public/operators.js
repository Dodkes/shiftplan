
//SERVER DATA ACCESS - API
function postApiToServer () {
    fetch('/api', {method: 'POST', headers: { 'Content-Type' : 'application/json'}, body: JSON.stringify(operatorsArray)})
    fetch('/dslarray', {method: 'POST', headers: { 'Content-Type' : 'application/json'}, body: JSON.stringify(dSLArray)})
    fetch('/nslarray', {method: 'POST', headers: { 'Content-Type' : 'application/json'}, body: JSON.stringify(nSLArray)})
    console.log('%c Data saved: ' + new Date(), 'background: black; color: #bada55; border: 1px solid #bada55')
}

function getApiFromServer () {
    fetch('/api')
    .then((res)=> res.text())
    .then((data)=> operatorsArray = JSON.parse(data))

    fetch('dslarray')
    .then((res)=> res.text())
    .then((data)=> dSLArray = JSON.parse(data))

    fetch('nslarray')
    .then((res)=> res.text())
    .then((data)=> nSLArray = JSON.parse(data))
    // .then(setTimeout(() => {
    //     renderMainGrid()
    //     sumGridCounterUpdate()
    //     firstTooltipRender()
    // }, 1000))
    .then(renderMainGrid)
    .then(sumGridCounterUpdate)
    .then(firstTooltipRender)
}

let operatorsArray
resetOperatorsArray()

function resetOperatorsArray () {

operatorsArray = 
    [
        operator1 = {
        name: 'Operator 1',
        realName: 'A. Miroslav',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator2 = {
        name: 'Operator 2',
        realName: 'B. David',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },   
    operator3 = {
        name: 'Operator 3',
        realName: 'B. Pavol',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },
    operator4 = {
        name: 'Operator 4',
        realName: 'C. Vladimir',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator5 = {
        name: 'Operator 5',
        realName: 'D. Matus',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },
    operator6 = {
        name: 'Operator 6',
        realName: 'G. Roman',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },
    operator7 = {
        name: 'Operator 7',
        realName: 'H. Michaela',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator8 = {
        name: 'Operator 8',
        realName: 'H. Patrik',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator9 = {
        name: 'Operator 9',
        realName: 'H. Andrej',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator10 = {
        name: 'Operator 10',
        realName: 'H. Pavol',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },
     operator11 = {
        name: 'Operator 11',
        realName: 'H. Milos',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },
    operator12 = {
        name: 'Operator 12',
        realName: 'J. Erik',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator13 = {
        name: 'Operator 13',
        realName: 'M. Milan',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator14 = {
        name: 'Operator 14',
        realName: 'M. Tomas',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },
    operator15 = {
        name: 'Operator 15',
        realName: 'P. Dominik',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator16 = {
        name: 'Operator 16',
        realName: 'S. Tomas',
        shiftleader: true,
        workday: [],
        mobileWorkDay: []
    },
    operator17 = {
        name: 'Operator 17',
        realName: 'Z. Jozef',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator18 = {
        name: 'Operator 18',
        realName: 'M. Ivan',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator19 = {
        name: 'Operator 19',
        realName: 'K. Patrik',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator20 = {
        name: 'Operator 20',
        realName: 'P. Fabian',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator21 = {
        name: 'Operator 21',
        realName: 'M. Matus',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    },
    operator22 = {
        name: 'Operator 22',
        realName: 'S. Barbara',
        shiftleader: false,
        workday: [],
        mobileWorkDay: []
    }]

}
