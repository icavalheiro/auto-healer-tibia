var robot = require( "robotjs" );

function getColorAt ( position ) {//{x, y
    var hex = robot.getPixelColor( position.x, position.y );
    return "#" + hex;
};

module.exports = getColorAt;