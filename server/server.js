// Calling the package method

Meteor.methods({
    'getMatch': function(){
        return Dota.getMatch();
    }
})
