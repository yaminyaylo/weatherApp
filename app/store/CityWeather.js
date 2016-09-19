Ext.define('WeatherApp.store.CityWeather', {
  extend: 'Ext.data.Store',
  requires: 'WeatherApp.model.Day',
  model: 'WeatherApp.model.Day',
  storeId: 'CityWeather',
  proxy: {
    type: 'ajax',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    extraParams : {
      appid: '3196ee0f7d54e35e4459ed5aea1c6873',
      units: 'metric'
    },
    reader: {
      type: 'json',
      root: ''
    }
  }
});