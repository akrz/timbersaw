Package.describe({
    summary: "Dota Api Wrapper",
    version: "0.1.0",
    name: "dota"
});

Package.onUse(function (api) {
    api.addFiles('dota.js', 'server');
    api.export('Dota');
});
