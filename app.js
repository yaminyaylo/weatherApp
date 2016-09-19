/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.Loader.setConfig({
    disableCaching: false
});

Ext.application({
    name: 'WeatherApp',
    extend: 'WeatherApp.Application',
    globals: {
      openWeatherMapApiKey: '3196ee0f7d54e35e4459ed5aea1c6873',
      getCurrentWaetherByCityName: 'http://api.openweathermap.org/data/2.5/weather',
      getDailyWaetherByCity: 'http://api.openweathermap.org/data/2.5/forecast/daily',
      get5DaysWaetherByCity: 'http://api.openweathermap.org/data/2.5/forecast'
    },
    autoCreateViewport: true,

    launch: function () {
        Ext.Ajax.cors = true;
        Ext.Ajax.useDefaultXhrHeader = false;
    }
});
