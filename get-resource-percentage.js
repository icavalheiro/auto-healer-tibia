var config = require( './config.json' );
var getColorAt = require( './get-color-at' );

function getResourceColorAt ( y ) {
    position = { x: config.x, y };
    return getColorAt( { x: config.x, y } );
}

function getResourcePercentage ( start, end, resourceColor ) {
    let distance = end - start;

    for ( let i = 0; i < 100; i += 10 ) {
        let multiplier = i / 100.0;
        let percentage = 100 - i;

        if ( getResourceColorAt( start + ( distance * multiplier ) ) == resourceColor ) {
            return percentage;
        }
    }

    return 0;
}

module.exports = getResourcePercentage;