// const { getUUID, getAge} = require('../plugins');

interface BuildMakePersonOptions{
    getUUID: () => string;
    getAge: (birthdate: string ) => number; 
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge}: BuildMakePersonOptions) =>{
    
    return ({name , birthdate}: PersonOptions) => { 

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
