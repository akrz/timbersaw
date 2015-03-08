Meteor.call('getMatch', function(error, result){
    var duration = numeral(result.duration).format('00:00:00');
    Session.set('duration', duration);

    var winner = Meteor.myFunctions.getWinner(result.radiant_win);
    Session.set('winner', winner);
});

Template.layout.helpers({
    winner: function () {
        return Session.get('winner');
    },
    duration: function () {
        return Session.get('duration');
    }
});