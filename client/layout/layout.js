Meteor.call('getMatch', function(error, result){
    var duration = numeral(result).format('00:00:00');
    Session.set('match', duration);
    /*Meteor.call('secondsToHms', result, function (error, result) {
        	
    });*/
});

Template.layout.helpers({
	match: function () {
		return Session.get('match');
	}
});