Dota = {};

Dota.getMatch = function() {
    if (!Meteor.settings.steamToken)
        throw new Meteor.Error(500, 'Enter a valid Steam Token in Meteor.settings');

    var matchResponse = Meteor.http.get(
        "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?",
        {
            params:{
                "match_id": "1305454585",
                "key": Meteor.settings.steamToken
            }
        }
    );

    if (matchResponse.statusCode === 200) {
        return matchResponse.data.result
    }
    else {
        throw new Meteor.Error(500, "getMatch failed with error: "+matchResponse.statusCode);
    }
}

Meteor.methods({
    'getMatch': function(){
        return Dota.getMatch();
    }
})