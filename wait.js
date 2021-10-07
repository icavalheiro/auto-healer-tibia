async function wait ( milliseconds ) {
    return new Promise( ( res, rej ) => setTimeout( res, milliseconds ) );
};

module.exports = wait;
