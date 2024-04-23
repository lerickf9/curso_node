// const { getUUID, getAge} = require('../plugins');

const buildMakePerson = ({ getUUID, getAge}) =>{
    
    return ({name , birthdate}) => { 

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
    
        }
    }
}




// const obj = { name: 'Erick', birthdate: '1993-02-27'};

// const erick = buildPerson(obj);

// console.log(erick);

module.exports = {
    buildMakePerson,
}