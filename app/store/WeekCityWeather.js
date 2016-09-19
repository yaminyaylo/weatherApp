Ext.define('WeatherApp.store.WeekCityWeather', {
  extend: 'Ext.data.Store',
  requires: 'WeatherApp.model.Days',
  model: 'WeatherApp.model.Days',
  storeId: 'WeekCityWeather',
  proxy: {
    type: 'ajax',
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
    extraParams : {
      appid: '3196ee0f7d54e35e4459ed5aea1c6873',
      units: 'metric',
      type: 'accurate',
      // lang: 'ua',
      // id: 702550,
      cnt: '7'
    },
    reader: {
      type: 'json',
      root: 'list'
    }
  }
});