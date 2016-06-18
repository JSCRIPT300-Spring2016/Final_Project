'use strict';

var express = require('express');
var gameMatch = require ('../colorGen/color');

var app = express();
var router = express.Router();

router.route('/')
.post(function (req, res) {
    var newGame = req.body;
    var playerName = newGame.name;
    var playerScore = newGame.highScore;
    var playerColors = [newGame.box_0, newGame.box_1, newGame.box_2, newGame.box_3];
    var score = 20;
    console.log(playerName + ',' + playerColors + ',');
    console.log(newGame.highScore);

    if (!newGame) {
        res.status(400).send('error sending game to server');
    }

    var serverColors = gameMatch.getColors(playerColors);
    var score = gameMatch.getScore(playerColors, serverColors, playerScore);

    console.log('Total Score :' + score);
    serverColors.push(score);
    serverColors.push(playerScore);
    console.log('Server ROUTE: ' + serverColors);


    res.send(serverColors);

})
.get(function (req, res) {

});

module.exports = router;