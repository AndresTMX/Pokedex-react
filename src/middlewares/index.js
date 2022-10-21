//funcion que retorna otra funcion
//recibe el store , next es la funcion y action es la info
export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featuring = (store) => (next) => (action) => {
    const featured = [{name:'eddie'}, ...action.action.payload];   

    const updatedActionInfo = { 
        ...action,
        action: {...action.action, payload: featured}
    };

    next(updatedActionInfo);
};

// export const addId = (store) => (next) => (action) => {

//     if(action.action.type === 'SET_POKEMONS'){
//         const pokemons = action.action.payload;
//         const pokemonsWithId = pokemons.map((pokemon, id ) => ({
//         ...pokemon, 
//         id:id + 1
//         }));

//         const updatesPokemonsWithId = {
//             ...action,
//             action: {
//                 ...action.action,
//                 payload: pokemonsWithId
//             }
//         };
//         console.log('jajajas')
//         next(updatesPokemonsWithId);
       
//     }else {
//         console.log('no esta funcionando')
//     }

// }
