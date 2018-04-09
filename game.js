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
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,1,
        1,0,0,0,0,0,0,0,0,0,0,0,2,0,2,4,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    //Not Used
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
        1,0,0,0,2,2,2,0,0,0,0,0,0,0,3,3,1,
        1,4,0,2,2,2,0,0,0,0,0,0,0,3,3,3,1,
        1,0,2,2,2,0,0,0,0,0,0,0,3,3,3,3,1,
        1,2,2,2,0,0,0,0,0,0,0,3,3,3,3,3,1,
        1,2,2,0,0,0,0,0,0,0,3,3,3,3,3,3,1,
        1,2,0,0,0,0,0,0,0,3,3,3,3,3,3,3,1,
        1,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,1,
        1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,1,
        1,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,1,
        1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,1,
        1,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    var board5 = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,3,3,3,0,0,0,2,2,0,0,0,0,0,0,0,1,
        1,3,3,3,0,0,0,2,2,0,0,0,0,0,4,0,1,
        1,3,3,3,0,0,0,2,2,0,0,0,0,0,0,0,1,
        1,3,3,3,0,1,1,1,1,1,1,0,0,0,0,0,1,
        1,3,3,3,0,0,1,1,1,1,0,0,0,0,0,0,1,
        1,3,3,3,0,0,0,1,1,0,0,0,0,0,0,0,1,
        1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,0,0,0,5,5,5,0,0,0,0,0,0,1,
        1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    var level = 0;//Current Level


    //All levels
    var levels = [board1, board2 , board4, board5];

    //Total score that player earns.
    var energyScore = 0;


    //Amount of Attempts Player has left.
    var energyLife = 3;


    const WIDTH = 17; // width of grid
    const HEIGHT = 17; // height of grid

    var colorG = 0;//Color of Vector on creation.

    var musicTrack = 0;//Current note being played on vector creation.
    var musicTrackBounce = 0;
    var origMusic = 0;

    var xglobe = 0;//Current Position of edge of vector
    var yglobe = 0;

    //Coordinates where the bounce begins.
    var xB = 0;
    var yB = 0;

    //Starting coordinates of vector
    var xStart = 0;
    var yStart = 0;

    // Position where the cursor is lifted up from
    var xLift = 0;
    var yLift = 0;

    const COLOR_FLOOR = PS.COLOR_WHITE; // floor color
    const COLOR_WALL = PS.COLOR_BLACK; // wall color
    const COLOR_DEF = PS.COLOR_GRAY; // def color
    const COLOR_AREA = 0x45FFA8; // Area color
    const COLOR_GOAL = PS.COLOR_YELLOW; // Goal color
    const COLOR_RETICLE = 0xA1A7FF;//Retical color
    const COLOR_BOUNCE = PS.COLOR_BLUE;//bounce bead color.


    //Check to see if the first part of the vector has been cleared.
    var firstDone = false;

    //Check to see if the vector will bounce of a blue bead.
    var bounced = false;

    var beadCount = 0;

    var timer = null; // timer id, null if none

    var musicOST = ["xylo_c5",  "xylo_db5", "xylo_d5", "xylo_eb5",
        "xylo_f5", "xylo_gb5", "xylo_g5", "xylo_ab5", "xylo_a5",
        "xylo_bb5", "xylo_b5", "xylo_c6", "xylo_db6", "xylo_d6",
        "xylo_eb6"];


    // The 'exports' object is used to define
    // variables and/or functions that need to be
    // accessible outside this function.
    // So far, it contains only one property,
    // an 'init' function with no parameters.

    var exports = {


        /* This function activates when the player reaches the goal.
         * If the player finishes a level that isn't the final level, the board changes to the next level.
         * If the player was on the last level, than a victory message launches.
         */
        victory : function () {

            PS.statusColor(0x3FF40);
            PS.statusText("YOU WIN!!! Next Round!");
            PS.audioPlay("fx_tada");
            if (level < 3) {
                level++;
                PS.init();
            }
            else {
                level = 0;
                PS.statusText("YOU ARE THE VECTOR LIBERATOR!!!!");
            }

        },


        /* This function clears out the beads that were created from the bounce.
         * direction: the direction the beads were originally traveling before the bounce.
         * x: original x position of starting bead
         * y: original y position of starting bead
         */
        bounceEnd : function (x, y, direction){

            xglobe = xB;//reset xglobe
            yglobe = yB;//reset yglobe

            bounced = false;//reset bounced so that bounce can occur again.


            if (!timer) {

                //Beads from this point will travel in the opposite direction from "direction" i.e., if direction is
                //East, this function will go West


                //East
                if (direction === "East") {

                    timer = PS.timerStart(15, G.endMove, xglobe, yglobe, 1, 0, direction);
                }
                //SouthEast
                else if (direction === "SouthEast") {

                    timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 1, -1, direction);
                }
                //South
                else if (direction === "South") {

                    timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 0, -1, direction);
                }
                //SouthWest
                else if (direction === "SouthWest") {

                    timer = PS.timerStart(25, G.endMove, xglobe, yglobe, -1, -1, direction);
                }
                //West
                else if (direction === "West") {
                    timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 1, 0, direction);
                }
                //NorthWest
                else if (direction === "NorthWest") {

                    timer = PS.timerStart(25, G.endMove, xglobe, yglobe, -1, 1, direction);
                }
                //North
                else if (direction === "North") {

                    timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 0, 1, direction);
                }
                //NorthEast
                else if (direction === "NorthEast") {

                    timer = PS.timerStart(25, G.endMove, xglobe, yglobe, -1, 1, direction);
                }

            }

        },


        //Function that erases vector. Is put through a timer in "end"
        //x: original x position of starting point
        //y: original y position of starting point
        //h, v: horiz and verticle direction that the vector is moving in each cycle.
        endMove : function (x, y, h, v, dir) {


            xglobe += h; // update grabber's x-pos
            yglobe += v; // update grabber's y-pos
            //Check the color of the next bead. If not a special bead, move on. If it is special, stop.

            PS.debug("firstDone " + firstDone + " \n");
            PS.debug("bounced " + bounced + " \n");

            if (PS.color(xglobe, yglobe) === COLOR_WALL) {
                PS.timerStop(timer);

                firstDone = true;
                timer = null;

                //If there was a bounce and the first vector has been removed, activate bounceEnd.
                if (bounced === true && firstDone === true) {
                    PS.audioPlay(musicOST[musicTrackBounce]);
                    PS.gridPlane(1);
                    G.bounceEnd(x, y, dir);

                }
                else {
                    PS.audioPlay(musicOST[musicTrack]);
                    PS.gridPlane(0);
                    firstDone = false;
                }

            }

            else if (PS.color(xglobe, yglobe) === COLOR_DEF) {

                PS.color(xglobe, yglobe, COLOR_FLOOR);
                PS.timerStop(timer);
                firstDone = true;
                timer = null;

                if (bounced === true && firstDone === true) {
                    PS.audioPlay("fx_blast4");
                    PS.gridPlane(1);
                    G.bounceEnd(x, y, dir);

                }
                else {
                    PS.audioPlay("fx_blast4");
                    PS.gridPlane(0);
                    firstDone = false;
                }

            }

            else if (PS.color(xglobe, yglobe) === COLOR_GOAL) {


                PS.audioPlay(musicOST[musicTrack]);
                PS.color(xglobe, yglobe, COLOR_FLOOR);
                PS.timerStop(timer);
                firstDone = true;
                timer = null;


                if (bounced === true && firstDone === true) {

                    PS.audioPlay(musicOST[musicTrackBounce]);
                    PS.gridPlane(1);
                    G.bounceEnd(x, y, dir);

                }
                else {
                    PS.audioPlay(musicOST[musicTrackBounce]);
                    G.victory();
                    PS.gridPlane(0);
                    firstDone = false;
                }

            }


            else if (PS.color(xglobe, yglobe) === COLOR_AREA) {

                PS.audioPlay(musicOST[musicTrack]);
                PS.color(xglobe, yglobe, COLOR_AREA);
                PS.timerStop(timer);
                firstDone = true;
                timer = null;

                if (bounced === true && firstDone === true) {
                    PS.audioPlay(musicOST[musicTrackBounce]);
                    PS.gridPlane(1);
                    G.bounceEnd(x, y, dir);

                }
                else {
                    PS.audioPlay(musicOST[musicTrack]);
                    PS.gridPlane(0);
                    firstDone = false;
                }

            }

            else if (PS.color(xglobe, yglobe) === COLOR_BOUNCE) {

                PS.color(xglobe, yglobe, COLOR_BOUNCE);
                PS.timerStop(timer);
                firstDone = true;
                timer = null;

                if (bounced === true && firstDone === true) {
                    PS.audioPlay(musicOST[musicTrackBounce]);
                    PS.gridPlane(1);
                    G.bounceEnd(x, y, dir);

                }
                else {
                    PS.audioPlay(musicOST[musicTrack]);
                    PS.gridPlane(0);
                    firstDone = false;
                }

            }
            else {

                if (bounced === false && firstDone === true) {

                    PS.debug("End Music track Bounce " + musicTrackBounce + "\n");
                    PS.audioPlay(musicOST[musicTrackBounce]);
                    musicTrackBounce--;

                }
                else {

                    PS.debug("End Else Music track " + musicTrack + "\n");
                    PS.audioPlay(musicOST[musicTrack]);
                    musicTrack--;
                    beadCount--;

                }
                PS.alpha( xglobe, yglobe, PS.ALPHA_TRANSPARENT );
            }

        },


        //Function that erases vector. Is put through a timer in "end"
        //x: original x position of starting point
        //y: original y position of starting point
        end : function (x, y, dir) {


            PS.debug (firstDone + " \n");


            if (firstDone === false) {
                xglobe = xStart;
                yglobe = yStart;
            }
            else {
                xglobe = x;
                yglobe = y;
            }


            PS.debug("xglobe " + xglobe + " yglobe " + yglobe + " \n");

            PS.audioPlay(musicOST[musicTrack]);
            musicTrack--;
            PS.alpha( xglobe, yglobe, PS.ALPHA_TRANSPARENT );

            if (!timer) {

                if (firstDone === false) {


                    //East
                    if (xglobe < xLift && yglobe === yLift) {

                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 1, 0, dir);
                    }
                    //SouthEast
                    else if (xglobe < xLift && yglobe < yLift) {

                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 1, 1, dir);
                    }
                    //South
                    else if (xglobe === xLift && yglobe < yLift) {

                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 0, 1, dir);
                    }
                    //SouthWest
                    else if (xglobe > xLift && yglobe < yLift) {

                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, -1, 1, dir);
                    }
                    //West
                    else if (xglobe > xLift && yglobe === yLift) {
                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, -1, 0, dir);
                    }
                    //NorthWest
                    else if (xglobe > xLift && yglobe > yLift) {

                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, -1, -1, dir);
                    }
                    //North
                    else if (xglobe === xLift && yglobe > yLift) {

                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 0, -1, dir);
                    }
                    //NorthEast
                    else if (xglobe < xLift && yglobe > yLift) {

                        timer = PS.timerStart(25, G.endMove, xglobe, yglobe, 1, -1, dir);
                    }

                }

            }

        },



        //This function activates the bounce on colliding with a blue bead.

        bounce : function (direction){

            bounced = true;

            xB = xglobe;
            yB = yglobe;


            if (!timer) {

                //West
                if (direction === "West") {
                    timer = PS.timerStart(25, G.move, xB, yB, -1, 0, "West");
                }
                //NorthEast
                else if (direction === "NorthEast") {
                    timer = PS.timerStart(25, G.move, xB, yB, 1, -1, "NorthWest");
                }
                //North
                else if (direction === "North") {
                    timer = PS.timerStart(25, G.move, xB, yB, 0, -1, "North");
                }
                //NorthWest
                else if (direction === "NorthWest") {
                    timer = PS.timerStart(25, G.move, xB, yB, 1, -1, "NorthWest");
                }
                //East
                else if (direction === "East") {
                    timer = PS.timerStart(25, G.move, xB, yB, 1, 0, "East");
                }
                //SouthWest
                else if (direction === "SouthWest") {
                    timer = PS.timerStart(25, G.move, xB, yB, 1, 1, "SouthWest");
                }
                //South
                else if (direction === "South") {
                    timer = PS.timerStart(25, G.move, xB, yB, 0, 1, "South");
                }
                //SouthEast
                else if (direction === "SouthEast") {
                    timer = PS.timerStart(25, G.move, xB, yB, 1, -1, "SouthEast");
                }

                musicTrackBounce = 0;
                musicTrack++;

            }

        },


        //Function that erases vector. Is put through a timer in "end"
        //x: original x position of starting point
        //y: original y position of starting point
        //h, v: horiz and verticle direction that the vector is moving in each cycle.
        move : function ( x, y, h, v, dir) {

            xglobe += h; // update grabber's x-pos
            yglobe += v; // update grabber's y-pos


            if (PS.color(xglobe, yglobe) === COLOR_WALL) {
                PS.timerStop(timer);

                PS.audioPlay("fx_bucket");

                timer = null;
                G.end(x, y, dir);

            }
            else if (PS.color(xglobe, yglobe) === COLOR_DEF) {
                PS.timerStop(timer);

                PS.audioPlay("fx_shoot7");

                timer = null;
                G.end(x, y, dir);

            }
            else if (PS.color(xglobe, yglobe) === COLOR_GOAL) {
                PS.timerStop(timer);

                timer = null;
                G.end(x, y, dir);


            }
            else if (PS.color(xglobe, yglobe) === COLOR_BOUNCE) {
                PS.timerStop(timer);
                PS.audioPlay("fx_jump3");
                origMusic = musicTrack;
                timer = null;
                xglobe -= h;
                yglobe -= v;
                G.bounce(dir);

            }
            else {

                if (bounced === true) {
                    PS.audioPlay(musicOST[musicTrackBounce]);
                    musicTrackBounce++;
                }
                else {
                    PS.audioPlay(musicOST[musicTrack]);
                    musicTrack++;
                }
                PS.color(xglobe, yglobe, colorG);
                PS.alpha( xglobe, yglobe, PS.ALPHA_OPAQUE );
                beadCount++;
            }

        },



        //Function that begins the vector. Is put through a timer
        //x: original x position of starting point
        //y: original y position of starting point
        start : function (x, y) {

            xLift = x;
            yLift = y;

            G.firstClickEnd(xglobe, yglobe);
            PS.gridPlane(1);


            if (!timer) {

                //West
                if (xglobe < x && yglobe === y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, 1, 0, "West");
                }
                //SouthEast
                else if (xglobe < x && yglobe < y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, 1, 1, "SouthEast");
                }
                //North
                else if (xglobe === x && yglobe < y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, 0, 1, "South");
                }
                //SouthWest
                else if (xglobe > x && yglobe < y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, -1, 1, "NorthWest");
                }
                //East
                else if (xglobe > x && yglobe === y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, -1, 0,"East");
                }
                //NorthWest
                else if (xglobe > x && yglobe > y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, -1, -1, "NorthWest");
                }
                //North
                else if (xglobe === x && yglobe > y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, 0, -1, "North");
                }
                //NorthEast
                else if (xglobe < x && yglobe > y) {

                    timer = PS.timerStart(25, G.move, xglobe, yglobe, 1, -1, "NorthEast");
                }
                else {
                    energyLife++;
                }

                musicTrack = 0;
                musicTrack++;

                PS.audioPlay( "fx_ding" );

            }

        },


        //Function that erases the red aim line.
        //x: original x position of the red bead
        //y: original x position of the red bead
        //v: verticle change of the red bead line.
        //h: horizontal change of the red bead line.
        aimLineGone : function (x, y, v, h) {

            if( x < 17 && x > 0 && y < 17 && y > 0 ) {
                x += v;
                y += h;


                PS.alpha(x, y, PS.ALPHA_TRANSPARENT);
            }


        },

        //Function that erases the red aim line.
        //x: original x position of the red bead
        //y: original x position of the red bead

        aimLineDestroy : function (x, y) {

            if( x < 17 && x > 0 && y < 17 && y > 0 ) {

                //East
                if (xglobe < x && yglobe === y) {
                    G.aimLineGone(xglobe + 1, yglobe, 1, 0);
                }
                //SouthEast
                else if (xglobe < x && yglobe < y) {
                    G.aimLineGone(xglobe + 1, yglobe + 1, 1, 1);
                }
                //South
                else if (xglobe === x && yglobe < y) {
                    G.aimLineGone(xglobe, yglobe + 1, 0, 1);
                }
                //SouthWest
                else if (xglobe > x && yglobe < y) {
                    G.aimLineGone(xglobe - 1, yglobe + 1, -1, 1);
                }
                //West
                else if (xglobe > x && yglobe === y) {
                    G.aimLineGone(xglobe - 1, yglobe, -1, 0);
                }
                //NorthWest
                else if (xglobe > x && yglobe > y) {
                    G.aimLineGone(xglobe - 1, yglobe - 1, -1, -1);
                }
                //North
                else if (xglobe === x && yglobe > y) {
                    G.aimLineGone(xglobe, yglobe - 1, 0, -1);
                }
                //NorthEast
                else if (xglobe < x && yglobe > y) {
                    G.aimLineGone(xglobe + 1, yglobe - 1, 1, -1);
                }
            }

        },

        //Function that Creates the red aim line.
        //x: original x position of the red bead
        //y: original x position of the red bead
        //v: verticle change of the red bead line.
        //h: horizontal change of the red bead line.
        aimLine : function (x, y, h, v) {

            x += h;
            y += v;

            PS.color(x, y, PS.COLOR_RED);

            PS.alpha(x, y, PS.ALPHA_OPAQUE);



        },


        //Function that Creates the red aim line.
        //x: original x position of the red bead
        //y: original x position of the red bead

        aimLineSetup :function (x, y) {

            if( x < 17 && x > 0 && y < 17 && y > 0 ) {
                if (xglobe < x && yglobe === y) {
                    G.aimLine(xglobe + 1, yglobe, 1, 0);
                }
                //NorthEast
                else if (xglobe < x && yglobe < y) {
                    G.aimLine(xglobe + 1, yglobe + 1, 1, 1);
                }
                //North
                else if (xglobe === x && yglobe < y) {
                    G.aimLine(xglobe, yglobe + 1, 0, 1);
                }
                //NorthWest
                else if (xglobe > x && yglobe < y) {
                    G.aimLine(xglobe - 1, yglobe + 1, -1, 1);
                }
                //West
                else if (xglobe > x && yglobe === y) {
                    G.aimLine(xglobe - 1, yglobe, -1, 0);
                }
                //SouthWest
                else if (xglobe > x && yglobe > y) {
                    G.aimLine(xglobe - 1, yglobe - 1, -1, -1);
                }
                //South
                else if (xglobe === x && yglobe > y) {
                    G.aimLine(xglobe, yglobe - 1, 0, -1);
                }
                //SouthEast
                else if (xglobe < x && yglobe > y) {
                    G.aimLine(xglobe + 1, yglobe - 1, 1, -1);
                }
            }

        },


        //Function that creates the retical for the player to use.
        //x: Original x position of the starting point where the player clicked.
        //y: Original y position of the starting point where the player clicked.
        firstClickSetup : function (x, y) {

            xglobe = x;
            yglobe = y;

            PS.gridPlane(2);


            PS.color( x+1, y, COLOR_RETICLE);
            PS.alpha( x+1, y, PS.ALPHA_OPAQUE );
            PS.color( x, y+1, COLOR_RETICLE );
            PS.alpha( x, y+1, PS.ALPHA_OPAQUE );
            PS.color( x+1, y+1, COLOR_RETICLE );
            PS.alpha( x+1, y+1, PS.ALPHA_OPAQUE );
            PS.color( x-1, y-1, COLOR_RETICLE );
            PS.alpha( x-1, y-1, PS.ALPHA_OPAQUE );
            PS.color( x-1, y, COLOR_RETICLE );
            PS.alpha( x-1, y, PS.ALPHA_OPAQUE );
            PS.color( x, y-1, COLOR_RETICLE );
            PS.alpha( x, y-1, PS.ALPHA_OPAQUE );
            PS.color( x+1, y-1, COLOR_RETICLE );
            PS.alpha( x+1, y-1, PS.ALPHA_OPAQUE );
            PS.color( x-1, y+1, COLOR_RETICLE );
            PS.alpha( x-1, y+1, PS.ALPHA_OPAQUE );


        },

        //Function that gets rid of the reticle.
        firstClickEnd : function (x, y) {


            PS.alpha( x+1, y, PS.ALPHA_TRANSPARENT );
            PS.alpha( x, y+1, PS.ALPHA_TRANSPARENT );
            PS.alpha( x+1, y+1, PS.ALPHA_TRANSPARENT );
            PS.alpha( x-1, y-1, PS.ALPHA_TRANSPARENT );
            PS.alpha( x-1, y, PS.ALPHA_TRANSPARENT );
            PS.alpha( x, y-1, PS.ALPHA_TRANSPARENT );
            PS.alpha( x+1, y-1, PS.ALPHA_TRANSPARENT );
            PS.alpha( x-1, y+1, PS.ALPHA_TRANSPARENT );


        },


        //Gets color presets.
        //desiredColor: name of the preset.
        getPreset : function( desiredColor ) {

            if (desiredColor === "COLOR_FLOOR") {
                return COLOR_FLOOR;
            }
            else if (desiredColor === "COLOR_AREA") {
                return COLOR_AREA;
            }
            else if (desiredColor === "COLOR_GOAL") {
                return COLOR_GOAL;
            }
            else if (desiredColor === "COLOR_DEF") {
                return COLOR_DEF;
            }
            else if (desiredColor === "COLOR_RETICLE") {
                return COLOR_RETICLE;
            }
            else if (desiredColor === "COLOR_WALL") {
                return COLOR_WALL;
            }

        },


        //Reduces energy for each touch.
        energyLifeManip : function () {
            if (energyLife > 0) {
                energyLife--;
                energyScore++;
                return true;
            }
            else return false;

        },

        //Sends the energy function.
        energyLifePrint : function () {

            return energyLife;

        },

        energyScorePrint : function () {

            return energyScore;

        },


        //Sets the global color variable to establish the color of the vector
        colorSet : function (colorVar) {

            colorG = colorVar;

        },


        setStartingPoint : function (x, y) {

            xStart = x;
            yStart = y;


        },

        getStartingPoint : function (returnee) {

            if (returnee === "x"){
                return xStart;
            }
            else if (returnee === "y"){
                return yStart;
            }

        },



        // G.init()
        // Initializes the game
        //Initializes Game
        init : function () {
            PS.gridSize( WIDTH, HEIGHT ); // init grid
            PS.border( PS.ALL, PS.ALL, 1 ); // no borders

            energyLife = 5;

            PS.borderColor(PS.ALL, PS.ALL, PS.COLOR_BLACK);


            var selectedBoard = levels[level];

            for ( var x = 0; x < 17; x += 1 ) {
                for ( var y = 0; y < 17; y += 1 ) {
                    if ( selectedBoard[(y*17) + x] === 1) {
                        PS.gridPlane(1);
                        PS.color( x, y, COLOR_WALL );
                        PS.alpha( x, y, PS.ALPHA_OPAQUE );
                        PS.gridPlane(0);
                    }
                    else if ( selectedBoard[(y*17) + x] === 2) {
                        PS.gridPlane(1);
                        PS.color( x, y, COLOR_DEF );
                        PS.alpha( x, y, PS.ALPHA_OPAQUE );
                        PS.gridPlane(0);
                    }
                    else if ( selectedBoard[(y*17) + x] === 3) {
                        PS.color( x, y, COLOR_AREA );
                    }
                    else if ( selectedBoard[(y*17) + x] === 4) {
                        PS.gridPlane(1);
                        PS.color( x, y, COLOR_GOAL );
                        PS.alpha( x, y, PS.ALPHA_OPAQUE );
                        PS.gridPlane(0);
                    }
                    else if ( selectedBoard[(y*17) + x] === 5) {
                        PS.gridPlane(1);
                        PS.color( x, y, COLOR_BOUNCE );
                        PS.alpha( x, y, PS.ALPHA_OPAQUE );
                        PS.gridPlane(0);
                    }
                    else {
                        PS.color( x, y, COLOR_FLOOR );
                    }
                }
            }

            PS.audioLoad( "xylo_c5" ); //1
            PS.audioLoad( "xylo_db5" ); //2
            PS.audioLoad( "xylo_d5" ); //3
            PS.audioLoad( "xylo_eb5" ); //4
            PS.audioLoad( "xylo_e5" ); //5
            PS.audioLoad( "xylo_f5" ); //6
            PS.audioLoad( "xylo_gb5" ); //7
            PS.audioLoad( "xylo_g5" ); //8
            PS.audioLoad( "xylo_ab5" ); //9
            PS.audioLoad( "xylo_a5" ); //10
            PS.audioLoad( "xylo_bb5" ); //11
            PS.audioLoad( "xylo_b5" ); //12
            PS.audioLoad( "xylo_c6" ); //13
            PS.audioLoad( "xylo_db6" ); //14
            PS.audioLoad( "xylo_d6" ); //15
            PS.audioLoad( "xylo_eb6" ); //16
            PS.audioLoad( "fx_shoot7" );
            PS.audioLoad( "fx_bucket" );
            PS.audioLoad( "fx_jump3" );
            PS.audioLoad( "fx_squawk" ); //Duck Squak on failure
            PS.audioLoad( "fx_tada" ); //WIN!!!


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

    PS.debug("x " + x + " y " + y + " \n");

    G.setStartingPoint(x, y);

    if(PS.color(x, y) === G.getPreset("COLOR_AREA")) {

        if (G.energyLifePrint() > 0) {
            PS.gridPlane(1);



            var color = PS.color(x, y, r, g, b); // set bead color
            PS.alpha( x, y, PS.ALPHA_OPAQUE );
            PS.gridPlane(0);

            G.colorSet(color);
            G.firstClickSetup(x, y);
        }
        else {
            PS.statusColor(PS.COLOR_RED);
            PS.statusText("OUT OF CHANCES");
            PS.audioPlay("fx_squawk");
        }

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

    // Add code here for when the mouse button/touch is released over a bead.

    if (x !== G.getStartingPoint(x) && y !== G.getStartingPoint(y)) {
        if (PS.color(x, y) === G.getPreset("COLOR_RETICLE")) {
            if (G.energyLifeManip()) {

                PS.statusColor(PS.COLOR_BLUE);
                PS.statusText("Chances: " + G.energyLifePrint() + " Total Score is " + G.energyScorePrint());

                // Add code here for mouse clicks/touches over a bead.

                G.start(x, y);


            }
            PS.gridPlane(2);
            G.aimLineDestroy(x, y);
            PS.gridPlane(1);

        }
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


PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:
	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );
	// Add code here for when the mouse cursor/touch enters a bead.


    if( (x + 1) < 16 && (x - 1) > 0
        && (y + 1) < 16 && (y - 1) > 0
        && (y + 1) > 0 && (x + 1) > 0) {
        if (PS.color(x, y) === G.getPreset("COLOR_RETICLE")) {
            G.aimLineSetup(x, y);
        }
    }


};


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


PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:
	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );
	// Add code here for when the mouse cursor/touch exits a bead.

    if( (x + 1) < 16 && (x - 1) > 0
        && (y + 1) < 16 && (y - 1) > 0
        && (y + 1) > 0 && (x + 1) > 0) {
        if (PS.color(x, y) === G.getPreset("COLOR_RETICLE")) {
            G.aimLineDestroy(x, y);
        }
    }


};


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

    if (key === PS.KEY_ESCAPE) {


    }
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