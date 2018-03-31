// game.js for Perlenspiel 3.2

// The "use strict" directive in the following line is important. Don't alter or remove it!
"use strict";

// The following comment lines are for JSLint/JSHint. Don't alter or remove them!

/*jslint nomen: true, white: true */
/*global PS */

/*
This is a template for creating new Perlenspiel games.
All event-handling functions are commented out by default.
Uncomment and add code to the event handlers required by your project.
*/

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
[system] = an object containing engine and platform information; see API documentation for details.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.init() event handler:


var G = (function() {

    var board1 = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,
        1,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,1,
        1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    var energyLife = 3;

    var WIDTH = 17; // width of grid
    var HEIGHT = 17; // height of grid


    var musicTrack = 0;

    var xglobe = 0;
    var yglobe = 0;

    var COLOR_FLOOR = PS.COLOR_WHITE; // floor color
    var COLOR_WALL = PS.COLOR_BLACK; // wall color
    var COLOR_DEF = PS.COLOR_GRAY; // def color
    var COLOR_AREA = PS.COLOR_GREEN; // def color
    var COLOR_GOAL = PS.COLOR_YELLOW; // def color

    var timer = null; // timer id, null if none

    var musicOST = ["xylo_c5",  "xylo_db5", "xylo_d5", "xylo_eb5",
        "xylo_f5", "xylo_gb5", "xylo_g5", "xylo_ab5", "xylo_a5",
        "xylo_bb5", "xylo_b5", "xylo_c6", "xylo_db6", "xylo_d6",
        "xylo_eb6"];


    // The following variables are grab-related,
    // so they start with 'grab'

    // The 'exports' object is used to define
    // variables and/or functions that need to be
    // accessible outside this function.
    // So far, it contains only one property,
    // an 'init' function with no parameters.

    var exports = {


        endMove : function (x, y, h, v) {


            PS.debug("x, y b4 " + x + " " + y + "\n");
            PS.debug("h, v" + h + " " + v + "\n");

            xglobe += h; // update grabber's x-pos
            yglobe += v; // update grabber's y-pos

            PS.debug("x, y after " + x + " " + y + "\n");

            PS.debug( "PS.Color " + PS.color(x, y) + "\n")
            PS.debug( "Wall " + COLOR_WALL + "\n")
            PS.debug( "Def " + COLOR_DEF + "\n")
            PS.debug( "Floor" + COLOR_FLOOR + "\n")

            if (PS.color(xglobe, yglobe) === COLOR_WALL) {
                PS.timerStop(timer);
                timer = null;
            }
            else if (PS.color(xglobe, yglobe) === COLOR_DEF) {
                PS.audioPlay(musicOST[musicTrack]);
                musicTrack++;
                PS.color(xglobe, yglobe, COLOR_FLOOR);
                PS.timerStop(timer);
                timer = null;
            }
            else if (PS.color(xglobe, yglobe) === COLOR_GOAL) {
                PS.audioPlay(musicOST[musicTrack]);
                musicTrack++;
                PS.color(xglobe, yglobe, COLOR_FLOOR);
                PS.timerStop(timer);
                timer = null;
            }
            else {
                PS.debug( "In ELSE \n")
                PS.audioPlay(musicOST[musicTrack]);
                musicTrack++;
                PS.color(xglobe, yglobe, COLOR_FLOOR);
            }


        },


        end : function ( x, y, rand) {


            PS.debug("END");

            xglobe = x;
            yglobe = y;


            PS.audioPlay(musicOST[musicTrack]);
            musicTrack--;
            PS.color( xglobe, yglobe, COLOR_FLOOR); // set bead color

            if (!timer) {
                switch (rand) {
                    case 0:
                        //North
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 0, 1);
                        break;

                    case 1:
                        //East
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 1, 0);
                        break;

                    case 2:
                        //NorthEast
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 1, 1);
                        break;

                    case 3:
                        //NorthWest
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, -1, 1);
                        break;

                    case 4:
                        //SouthWest
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, -1, -1);
                        break;

                    case 5:
                        //South
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 0, -1);
                        break;

                    case 6:
                        //West
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, -1, 0);
                        break;

                    case 7:
                        //SouthEast
                        timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 1, -1);
                        break;

                }
            }
        },


        move : function ( x, y, h, v, r, g, b, rand) {

            PS.debug("x, y b4 " + x + " " + y + "\n");
            PS.debug("h, v" + h + " " + v + "\n");

            xglobe += h; // update grabber's x-pos
            yglobe += v; // update grabber's y-pos

            PS.debug("x, y after " + x + " " + y + "\n");

            PS.debug( "PS.Color " + PS.color(x, y) + "\n")
            PS.debug( "Wall " + COLOR_WALL + "\n")
            PS.debug( "Def " + COLOR_DEF + "\n")
            PS.debug( "Floor" + COLOR_FLOOR + "\n")

            if (PS.color(xglobe, yglobe) === COLOR_WALL) {
                PS.timerStop(timer);
                timer = null;
                G.end(x, y, rand);
            }
            else if (PS.color(xglobe, yglobe) === COLOR_DEF) {
                PS.timerStop(timer);
                timer = null;
                G.end(x, y, rand);
            }
            else if (PS.color(xglobe, yglobe) === COLOR_GOAL) {
                PS.timerStop(timer);
                timer = null;
                G.end(x, y, rand);
            }
            else {
                PS.debug( "In ELSE \n")
                PS.audioPlay(musicOST[musicTrack]);
                musicTrack++;
                PS.color(xglobe, yglobe, r, g, b);
            }

        },



        start : function (x, y, r, g, b) {

            if (!timer) {

                xglobe = x;
                yglobe = y;
                musicTrack = 0;
                musicTrack++;

                PS.color( xglobe, yglobe, r, g, b ); // set bead color

                var rand = PS.random(7);

                switch (rand) {
                    case 0:
                        //North
                        timer = PS.timerStart(60, G.move, x, y, 0, 1, r, g, b, rand);
                        break;

                    case 1:
                        //East
                        timer = PS.timerStart(60, G.move, x, y, 1, 0, r, g, b, rand);
                        break;

                    case 2:
                        //NorthEast
                        timer = PS.timerStart(60, G.move, x, y, 1, 1, r, g, b, rand);
                        break;

                    case 3:
                        //NorthWest
                        timer = PS.timerStart(60, G.move, x, y, -1, 1, r, g, b, rand);
                        break;

                    case 4:
                        //SouthWest
                        timer = PS.timerStart(60, G.move, x, y, -1, -1, r, g, b, rand);
                        break;

                    case 5:
                        //South
                        timer = PS.timerStart(60, G.move, x, y, 0, -1, r, g, b, rand);
                        break;

                    case 6:
                        //West
                        timer = PS.timerStart(60, G.move, x, y, -1, 0, r, g, b, rand);
                        break;

                    case 7:
                        //SouthEast
                        timer = PS.timerStart(60, G.move, x, y, 1, -1, r, g, b, rand);
                        break;

                }

                PS.audioPlay( "fx_ding" );

            }

            return rand;

        },


        energyLifeManip : function () {
            if (energyLife > 0) {
                energyLife--;
                return true;
            }
            else return false;

        },

        energyLifePrint : function () {
            return energyLife;

        },


        // G.init()
        // Initializes the game

        init : function () {
            PS.gridSize( WIDTH, HEIGHT ); // init grid
            PS.border( PS.ALL, PS.ALL, 0 ); // no borders

            energyLife = 3;

            for ( var x = 0; x < 17; x += 1 ) {
                for ( var y = 0; y < 17; y += 1 ) {
                    if ( board1[(y*17) + x] === 1) {
                        PS.color( x, y, COLOR_WALL );
                    }
                    else if ( board1[(y*17) + x] === 2) {
                        PS.color( x, y, COLOR_DEF );
                    }
                    else if ( board1[(y*17) + x] === 3) {
                        PS.color( x, y, COLOR_AREA );
                    }
                    else if ( board1[(y*17) + x] === 4) {
                        PS.color( x, y, COLOR_GOAL );
                    }
                    else {
                        PS.color( x, y, COLOR_FLOOR );
                    }
                }
            }


            PS.audioLoad( "xylo_c5" );//1
            PS.audioLoad( "xylo_db5" );//2
            PS.audioLoad( "xylo_d5" );//3
            PS.audioLoad( "xylo_eb5" );//4
            PS.audioLoad( "xylo_e5" );//5
            PS.audioLoad( "xylo_f5" );//6
            PS.audioLoad( "xylo_gb5" );//7
            PS.audioLoad( "xylo_g5" );//8
            PS.audioLoad( "xylo_ab5" );//9
            PS.audioLoad( "xylo_a5" );//10
            PS.audioLoad( "xylo_bb5" );//11
            PS.audioLoad( "xylo_b5" );//12
            PS.audioLoad( "xylo_c6" );//13
            PS.audioLoad( "xylo_db6" );//14
            PS.audioLoad( "xylo_d6" );//15
            PS.audioLoad( "xylo_eb6" );//16
            PS.audioLoad( "fx_squawk");//Duck Squak on failure


        }
    };

    // Return the 'exports' object as the value
    // of this function, thereby assigning it
    // to the global G variable. This makes
    // its properties visible to Perlenspiel.

    return exports;

} () );


PS.init = G.init;



/*
PS.touch ( x, y, data, options )
Called when the mouse button is clicked on a bead, or when a bead is touched.
It doesn't have to do anything.
[x] = zero-based x-position of the bead on the grid.
[y] = zero-based y-position of the bead on the grid.
[data] = the data value assigned to this bead by a call to PS.data(); default = 0.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.touch() event handler:
PS.touch = function( x, y, data, options ) {
    var r, g, b;
    // Uncomment the following code line to inspect x/y parameters:

    if (G.energyLifeManip()) {
        PS.statusColor(PS.COLOR_BLUE);
        PS.statusText("Energy is : " + G.energyLifePrint());
        // Add code here for mouse clicks/touches over a bead.
        r = PS.random(256) - 1; // random red 0-255
        g = PS.random(256) - 1; // random green
        b= PS.random(256) - 1; // random blue
        G.start( x, y, r, g, b);
    }
    else {
        PS.statusColor(PS.COLOR_RED);
        PS.statusText("OUT OF ENERGY");
        PS.audioPlay("fx_squawk");
    }

};



/*
PS.release ( x, y, data, options )
Called when the mouse button is released over a bead, or when a touch is lifted off a bead
It doesn't have to do anything
[x] = zero-based x-position of the bead on the grid
[y] = zero-based y-position of the bead on the grid
[data] = the data value assigned to this bead by a call to PS.data(); default = 0.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.release() event handler:

/*

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

*/

/*
PS.enter ( x, y, button, data, options )
Called when the mouse/touch enters a bead.
It doesn't have to do anything.
[x] = zero-based x-position of the bead on the grid.
[y] = zero-based y-position of the bead on the grid.
[data] = the data value assigned to this bead by a call to PS.data(); default = 0.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.enter() event handler:

/*

PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

*/

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits a bead.
It doesn't have to do anything.
[x] = zero-based x-position of the bead on the grid.
[y] = zero-based y-position of the bead on the grid.
[data] = the data value associated with this bead, 0 if none has been set.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.exit() event handler:

/*

PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

*/

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
It doesn't have to do anything.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.exitGrid() event handler:

/*

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

*/

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
It doesn't have to do anything.
[key] = ASCII code of the pressed key, or one of the PS.KEY constants documented at:
http://users.wpi.edu/~bmoriarty/ps/constants.html
[shift] = true if shift key is held down, else false.
[ctrl] = true if control key is held down, else false.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.keyDown() event handler:

/*

PS.keyDown = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is pressed.
};

*/

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
It doesn't have to do anything.
[key] = ASCII code of the pressed key, or one of the PS.KEY constants documented at:
http://users.wpi.edu/~bmoriarty/ps/constants.html
[shift] = true if shift key is held down, else false.
[ctrl] = true if control key is held down, else false.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.keyUp() event handler:

/*

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

*/

/*
PS.input ( sensors, options )
Called when an input device event (other than mouse/touch/keyboard) is detected.
It doesn't have to do anything.
[sensors] = an object with sensor information; see API documentation for details.
[options] = an object with optional parameters; see API documentation for details.
NOTE: Mouse wheel events occur ONLY when the cursor is positioned over the grid.
*/

// Uncomment the following BLOCK to expose PS.input() event handler:

/*

PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

*/

/*
PS.shutdown ( options )
Called when the browser window running Perlenspiel is about to close.
It doesn't have to do anything.
[options] = an object with optional parameters; see API documentation for details.
NOTE: This event is only used for applications utilizing server communication.
*/

// Uncomment the following BLOCK to expose PS.shutdown() event handler:

/*

PS.shutdown = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "Daisy, Daisy ...\n" );

	// Add code here for when Perlenspiel is about to close.
};

*/

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-17 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.
*/