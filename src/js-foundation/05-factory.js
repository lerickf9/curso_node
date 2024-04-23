const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const buildPerson = ({name , birthdate}) => {
    

    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),

    }
}

const obj = { name: 'Erick', birthdate: '1993-02-27'};

const erick = buildPerson(obj);

console.log(erick);