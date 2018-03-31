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

    //Board Configurations

    var board1 = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,
        1,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,1,
        1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    var board2 = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,0,0,2,1,
        1,3,3,3,3,3,3,3,3,3,3,3,0,0,2,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,2,0,2,1,
        1,3,3,3,3,3,3,3,3,3,0,0,2,0,2,4,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    var board3 = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,0,0,2,1,
        1,3,3,3,3,3,3,3,3,3,3,3,0,0,2,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,2,0,2,1,
        1,3,3,3,3,3,3,3,3,3,0,0,2,0,2,0,1,
        1,3,3,3,3,3,3,3,3,0,0,2,0,2,0,2,1,
        1,3,3,3,3,3,3,3,0,0,2,0,2,0,2,4,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    var board4 = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,3,3,3,2,2,2,0,3,3,3,3,3,3,3,3,1,
        1,4,3,2,2,2,0,3,3,3,3,3,3,3,3,3,1,
        1,3,2,2,2,0,3,3,3,3,3,3,3,3,3,3,1,
        1,2,2,2,0,3,3,3,3,3,3,3,3,3,3,3,1,
        1,2,2,0,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,2,0,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];


    //For Board Configuration Choosing
    var lastSeed;
    lastSeed = 0;


    //Amount of Attempts Player has left.
    var energyLife = 3;


    var WIDTH = 17; // width of grid
    var HEIGHT = 17; // height of grid

    var colorG = 0;//Color of Vector on creation.

    var musicTrack = 0;//Current note being played on vector creation.

    var xglobe = 0;//Current Position of edge of vector
    var yglobe = 0;

    // Position where the cursor is lifted up from
    var xLift = 0;
    var yLift = 0;

    var COLOR_FLOOR = PS.COLOR_WHITE; // floor color
    var COLOR_WALL = PS.COLOR_BLACK; // wall color
    var COLOR_DEF = PS.COLOR_GRAY; // def color
    var COLOR_AREA = 0x45FFA8; // Area color
    var COLOR_GOAL = PS.COLOR_YELLOW; // Goal color
    var COLOR_RETICAL = 0xA1A7FF;//Retical color

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


        //Function that erases vector. Is put through a timer in "end"
        //x: original x position of starting point
        //y: original y position of starting point
        //h, v: horiz and verticle direction that the vector is moving in each cycle.
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
                musicTrack--;
                PS.color(xglobe, yglobe, COLOR_FLOOR);
                PS.timerStop(timer);
                timer = null;
            }
            else if (PS.color(xglobe, yglobe) === COLOR_GOAL) {
                PS.audioPlay(musicOST[musicTrack]);
                musicTrack--;
                PS.color(xglobe, yglobe, COLOR_FLOOR);
                PS.timerStop(timer);
                timer = null;
            }
            else {
                PS.debug( "In ELSE \n")
                PS.audioPlay(musicOST[musicTrack]);
                musicTrack--;
                PS.color(xglobe, yglobe, COLOR_FLOOR);
            }


        },


        //Function that erases vector. Is put through a timer in "end"
        //x: original x position of starting point
        //y: original y position of starting point
        end : function (x, y) {


            PS.debug("END\n");

            xglobe = x;
            yglobe = y;


            PS.debug("xglobe " + xglobe + "\n");
            PS.debug("yglobe " + yglobe + "\n");
            PS.debug("xLift " + xLift + "\n");
            PS.debug("xLift " + yLift + "\n");


            PS.audioPlay(musicOST[musicTrack]);
            musicTrack--;
            PS.color( xglobe, yglobe, COLOR_FLOOR); // set bead color

            if (!timer) {

                PS.debug("Timer Check\n");

                //WEast
                if (xglobe < xLift && yglobe === yLift) {
                    PS.debug("East\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 1, 0);
                }
                //NorthEast
                else if (xglobe < xLift && yglobe < yLift) {
                    PS.debug("NorthEast\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 1, 1);
                }
                //North
                else if (xglobe === xLift && yglobe < yLift) {
                    PS.debug("North\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 0, 1);
                }
                //NorthWest
                else if (xglobe > xLift && yglobe < yLift) {
                    PS.debug("NorthWest\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, -1, 1);
                }
                //West
                else if (xglobe > xLift && yglobe === yLift) {
                    PS.debug("West\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, -1, 0);
                }
                //SouthWest
                else if (xglobe > xLift && yglobe > yLift) {
                    PS.debug("SouthWest\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, -1, -1);
                }
                //South
                else if (xglobe === xLift && yglobe > yLift) {
                    PS.debug("South\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 0, -1);
                }
                //SouthEast
                else if (xglobe < xLift && yglobe > yLift) {
                    PS.debug("SouthEest\n");
                    timer = PS.timerStart(60, G.endMove, xglobe, yglobe, 1, -1);
                }

            }

        },


        //Function that erases vector. Is put through a timer in "end"
        //x: original x position of starting point
        //y: original y position of starting point
        //h, v: horiz and verticle direction that the vector is moving in each cycle.
        move : function ( x, y, h, v) {

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
                G.end(x, y);
            }
            else if (PS.color(xglobe, yglobe) === COLOR_DEF) {
                PS.timerStop(timer);
                timer = null;
                G.end(x, y);
            }
            else if (PS.color(xglobe, yglobe) === COLOR_GOAL) {
                PS.timerStop(timer);
                timer = null;
                G.end(x, y);
            }
            else {
                PS.debug( "In ELSE \n")
                PS.audioPlay(musicOST[musicTrack]);
                musicTrack++;
                PS.color(xglobe, yglobe, colorG);
            }

        },



        //Function that erases vector. Is put through a timer in "end"
        //x: original x position of starting point
        //y: original y position of starting point
        start : function (x, y) {

            xLift = x;
            yLift = y;

            G.firstClickEnd(xglobe, yglobe)

            if (!timer) {

                //West
                if (xglobe < x && yglobe === y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, 1, 0);
                }
                //NorthEast
                else if (xglobe < x && yglobe < y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, 1, 1);
                }
                //North
                else if (xglobe === x && yglobe < y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, 0, 1);
                }
                //NorthWest
                else if (xglobe > x && yglobe < y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, -1, 1);
                }
                //West
                else if (xglobe > x && yglobe === y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, -1, 0);
                }
                //SouthWest
                else if (xglobe > x && yglobe > y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, -1, -1);
                }
                //South
                else if (xglobe === x && yglobe > y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, 0, -1);
                }
                //SouthEast
                else if (xglobe < x && yglobe > y) {
                    timer = PS.timerStart(60, G.move, xglobe, yglobe, 1, -1);
                }
                else {
                    energyLife++;
                }

                musicTrack = 0;
                musicTrack++;

                PS.audioPlay( "fx_ding" );

            }

        },


        //Function that creates the reticle for the player to use.
        firstClickSetup : function (x, y) {

            xglobe = x;
            yglobe = y;

            PS.color( x+1, y, COLOR_RETICAL );
            PS.color( x, y+1, COLOR_RETICAL );
            PS.color( x+1, y+1, COLOR_RETICAL );
            PS.color( x-1, y-1, COLOR_RETICAL );
            PS.color( x-1, y, COLOR_RETICAL );
            PS.color( x, y-1, COLOR_RETICAL );
            PS.color( x+1, y-1, COLOR_RETICAL );
            PS.color( x-1, y+1, COLOR_RETICAL );


        },

        //Function that gets rid of the reticle.
        firstClickEnd : function (x, y) {

            PS.color( x+1, y, COLOR_FLOOR );
            PS.color( x, y+1, COLOR_FLOOR );
            PS.color( x+1, y+1, COLOR_FLOOR );
            PS.color( x-1, y-1, COLOR_FLOOR );
            PS.color( x-1, y, COLOR_FLOOR );
            PS.color( x, y-1, COLOR_FLOOR );
            PS.color( x+1, y-1, COLOR_FLOOR );
            PS.color( x-1, y+1, COLOR_FLOOR );


        },

        //Reduces energy for each touch.
        energyLifeManip : function () {
            if (energyLife > 0) {
                energyLife--;
                return true;
            }
            else return false;

        },

        //Sends the energy function.
        energyLifePrint : function () {
            return energyLife;

        },


        //Sets the global color variable to establish the color of the vector
        colorSet (colorVar) {
            colorG = colorVar;

        },

        // G.init()
        // Initializes the game

        init : function () {
            PS.gridSize( WIDTH, HEIGHT ); // init grid
            PS.border( PS.ALL, PS.ALL, 0 ); // no borders

            energyLife = 3;



            PS.seed(PS.date().time);
            var selectedBoard;
            var boardSeed;
            boardSeed = PS.random(4);


            if(boardSeed === 1 && lastSeed != 1)
            {
                selectedBoard = board1;
                lastSeed = 1;
            }
            if(boardSeed === 2 && lastSeed != 2)
            {
                selectedBoard = board2;
                lastSeed = 2;
            }
            if(boardSeed === 3 && lastSeed != 3)
            {
                selectedBoard = board3;
                lastSeed = 3;
            }
            if(boardSeed === 4 && lastSeed != 4)
            {
                selectedBoard = board4;
                lastSeed = 4;
            }

            if(lastSeed === 0)
            {
                lastSeed = boardSeed;
            }



            for ( var x = 0; x < 17; x += 1 ) {
                for ( var y = 0; y < 17; y += 1 ) {
                    if ( selectedBoard[(y*17) + x] === 1) {
                        PS.color( x, y, COLOR_WALL );
                    }
                    else if ( selectedBoard[(y*17) + x] === 2) {
                        PS.color( x, y, COLOR_DEF );
                    }
                    else if ( selectedBoard[(y*17) + x] === 3) {
                        PS.color( x, y, COLOR_AREA );
                    }
                    else if ( selectedBoard[(y*17) + x] === 4) {
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

    r = PS.random(256) - 1; // random red 0-255
    g = PS.random(256) - 1; // random green
    b = PS.random(256) - 1; // random blue

    if (G.energyLifePrint() > 0) {
        var color = PS.color( x, y, r, g, b ); // set bead color
        G.firstClickSetup(x, y);
        G.colorSet(color);

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



PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.

    if (G.energyLifeManip()) {

        PS.statusColor(PS.COLOR_BLUE);
        PS.statusText("Energy is : " + G.energyLifePrint());

        // Add code here for mouse clicks/touches over a bead.

        G.start(x, y);


    }


};



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