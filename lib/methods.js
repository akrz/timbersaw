// JS functions that are shared in client/server.
// To call them: Meteor.myFunctions.function(param);

Meteor.myFunctions = {
    getWinner : function(radiant_win) {
        var winner;
        if (radiant_win) {
            winner = 'Radiant'
        }
        else {
            winner = 'Dire';
        }

        return winner;
    },
}