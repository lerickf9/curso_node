const { getUUID, getAge} = require('./plugins');

const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(4)
    .then( (pokemon) => console.log( { pokemon }))
    .catch( (err) => console.log(err) )
    .finally(() => console.log('Finalmente'));



// **************! Referencia a la funcion factory y uso *************

// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({getUUID,getAge });

// const obj = { name: 'Erick', birthdate: '1993-02-27'};
// const id = 2;
// getUserById(id , function(error, user){
//     if( error){
//         throw new Error ('User not found with id' , id);
//     }

//     console.log(user);
// }); 

// const Erick = makePerson (obj);

// console.log({ Erick });
//**************************************************************