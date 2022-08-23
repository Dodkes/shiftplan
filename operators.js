let operatorsArray

if (localStorage.getItem('operatorsJSON') === null) {
    operatorsArray = 
    [operator1 = {
        name: 'Operator 1',
        realName: 'A. Jan',
        shiftleader: false,
        workday: [],
    },
    operator2 = {
        name: 'Operator 2',
        realName: 'B. Michal',
        shiftleader: true,
        workday: [],
    },   
    operator3 = {
        name: 'Operator 3',
        realName: 'B. Jozef',
        shiftleader: true,
        workday: [],
    },
    operator4 = {
        name: 'Operator 4',
        realName: 'C. Robert',
        shiftleader: false,
        workday: [],
    },
    operator5 = {
        name: 'Operator 5',
        realName: 'D. Peter',
        shiftleader: true,
        workday: [],
    },
    operator6 = {
        name: 'Operator 6',
        realName: 'G. Stefan',
        shiftleader: true,
        workday: [],
    },
    operator7 = {
        name: 'Operator 7',
        realName: 'H. Jaroslav',
        shiftleader: false,
        workday: [],
    },
    operator8 = {
        name: 'Operator 8',
        realName: 'H. Lukas',
        shiftleader: false,
        workday: [],
    },
    operator9 = {
        name: 'Operator 9',
        realName: 'H. Richard',
        shiftleader: false,
        workday: [],
    },
    operator10 = {
        name: 'Operator 10',
        realName: 'H. Viktor',
        shiftleader: true,
        workday: [],
    },
     operator11 = {
        name: 'Operator 11',
        realName: 'H. Miroslav',
        shiftleader: true,
        workday: [],
    },
    operator12 = {
        name: 'Operator 12',
        realName: 'J. Eduard',
        shiftleader: false,
        workday: [],
    },
    operator13 = {
        name: 'Operator 13',
        realName: 'M. Radoslav',
        shiftleader: false,
        workday: [],
    },
    operator14 = {
        name: 'Operator 14',
        realName: 'M. Marek',
        shiftleader: true,
        workday: [],
    },
    operator15 = {
        name: 'Operator 15',
        realName: 'P. Juraj',
        shiftleader: false,
        workday: [],
    },
    operator16 = {
        name: 'Operator 16',
        realName: 'S. Filip',
        shiftleader: true,
        workday: [],
    },
    operator17 = {
        name: 'Operator 17',
        realName: 'Z. Frantisek',
        shiftleader: false,
        workday: [],
    },
    operator18 = {
        name: 'Operator 18',
        realName: 'M. Lubomir',
        shiftleader: false,
        workday: [],
    },
    operator19 = {
        name: 'Operator 19',
        realName: 'K. Martin',
        shiftleader: false,
        workday: [],
    },
    operator20 = {
        name: 'Operator 20',
        realName: 'P. Marian',
        shiftleader: false,
        workday: [],
    },
    operator21 = {
        name: 'Operator 21',
        realName: 'M. Adam',
        shiftleader: false,
        workday: [],
    }]
} else {
    operatorsArray = JSON.parse(localStorage.getItem('operatorsJSON'))
    console.log('local storage existuje')
}