import _ from 'underscore';

// Esta función crea un nuevo deck
/**
 * esta función crea un nuevo deck de cartas
 * @param {Array<String>} tipos 
 * @param {Array<String>} especiales 
 * @returns {Array} retorna un deck de cartas
 */
export const crearDeck = (tipos, especiales) => {

    if(!tipos || tipos.length===0) throw new Error('El tipo de cartas es necesario');
    

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}