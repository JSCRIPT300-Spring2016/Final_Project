'use strict';

module.exports = {
    getColors: function (playerColors) {
        var serverColors = ['Blue', 'Orange', 'Green', 'Red'];
        // console.log('In color : ' + playerColors);

        var currentIndex = serverColors.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = serverColors[currentIndex];
            serverColors[currentIndex] = serverColors[randomIndex];
            serverColors[randomIndex] = temporaryValue;

            return serverColors;
        }
    },
    getScore: function (playerColors, serverColors, playerScore) {
        // comparison of player v. server
        console.log('In score PLAYER: ' + playerColors);
        console.log('In score SERVER: ' + serverColors);
        console.log('Player score: ' + playerScore);
        var boxScore = [];
        var totalScore = 0;

        for (var i = 0; i < serverColors.length; i++) {
            if (serverColors[i] === playerColors[i]) {
                boxScore[i] = 5;
            }
            else {
                boxScore[i] = 0;
            }
        }
        for (var i = 0; i < boxScore.length; i++) {
            totalScore = (boxScore[i] + totalScore);
        }
        // console.log("Score: " + totalScore);

        return totalScore;
    }
}