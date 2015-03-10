// Calling the package method

Meteor.methods({
    'GetMatchDetails': function(){
        return Dota.GetMatchDetails();
    },
})
