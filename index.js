// Get pixel color under the mouse.
var config = require( './config.json' );
var wait = require( './wait' );
var getResourcePercentage = require( './get-resource-percentage' );
var robot = require( 'robotjs' );
var keypress = require( './keypress' );

let manaCd = 1.2;
let lifeCd = 1.2;

let manaOnCd = false;
let lifeOnCd = false;

async function main () {
    console.log( 'Please focus on tibia window (strating in 3 seconds)' );
    await wait( 3000 );

    while ( true ) {
        await wait( 500 );
        let mana = getResourcePercentage( config.manaStart, config.manaEnd, config.manaColor );
        let life = getResourcePercentage( config.lifeStart, config.lifeEnd, config.lifeColor );

        if ( !lifeOnCd ) {
            if ( life <= 90 ) {
                if ( life >= 70 ) {
                    //regular heal
                    robot.keyTap( config.regularHealKey );
                }
                else {
                    //emergency heal
                    robot.keyTap( config.emergencyHealKey );
                }

                lifeOnCd = true;
                setTimeout( () => lifeOnCd = false, lifeCd );
            }
        }

        if ( !manaOnCd ) {
            if ( mana < 90 ) {
                //mana pot
                robot.keyTap( config.manapotKey );
                manaOnCd = true;
                setTimeout( () => manaOnCd = false, manaCd );
            }
        }
    }
}

main();

//use this to scan the positions of the bars
// var scanPosition = require( './scan-position' );
// scanPosition();