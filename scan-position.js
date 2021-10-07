var robot = require( "robotjs" );
var wait = require( './wait' );
module.exports = async function scanPostion () {
    let countdown = 5;
    while ( countdown > 0 ) {
        console.log( 'position mouse in the pixel you want to read, countdouwn: ' + countdown );
        await wait( 1000 );
        countdown--;
    }

    // Get mouse position.
    var mouse = robot.getMousePos();

    // Get pixel color in hex format.
    var hex = robot.getPixelColor( mouse.x, mouse.y );
    console.log( "#" + hex + " at x:" + mouse.x + " y:" + mouse.y );
};