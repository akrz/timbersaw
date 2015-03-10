Dota = {};

Dota.GetMatchDetails = function() {
    checkToken();

    var matchResponse = Meteor.http.get(
        "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?",
        {
            params:{
                "match_id": "1305454585",
                "key": Meteor.settings.steamToken
            }
        }
    );

    return returnResponse(matchResponse);
};

Dota.GetLastMatch = function(account_id) {
    checkToken();


}

function checkToken() {
    if (!Meteor.settings.steamToken) {
        throw new Meteor.Error(500, 'Enter a valid Steam Token in Meteor.settings');
    }
}

function returnResponse(response) {
    if (response.statusCode === 200) {
        return response.data.result
    }
    else {
        throw new Meteor.Error(500, "GetMatchDetails failed with error: "+response.statusCode);
    }
}
