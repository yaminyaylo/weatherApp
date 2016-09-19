Ext.define('WeatherApp.controller.Main', {
  extend: 'Ext.app.Controller',
  requires: [
    'Ext.form.field.Display',
    'Ext.container.Container'
  ],
  refs: [
    {
      ref: 'mainContainer',
      selector: '#MainContainer'
    },{
      ref: 'searchField',
      selector: '#searchBox'
    }
  ],
  init: function() {
     this.control({
      'button[action=search]': {
          click: this.searchWeatherByCityName
       },
       '#searchBox': {
          search: this.searchWeatherByCityName
       }
     });
  },

  searchWeatherByCityName: function(button) {
    var tabWeatherPanel = this.getMainContainer();
    var inputCityName = this.getSearchField();
    var cityNameParam = inputCityName.getValue() || '';
    var store = Ext.getStore('CityWeather');

    if (cityNameParam.length == 0) {
      return;
    }

    store.on('load', function(store, records) {
      tabWeatherPanel.items.each(function(c){
        c.setDisabled(false);
      });
      Ext.getStore('WeekCityWeather').load({
        params: {
          id: store.first().get('id')
        }
      });
      Ext.getStore('SixteenDaysCityWeather').load({
        params: {
          id: store.first().get('id')
        }
      });
    });

    store.load({
      params: {
        q: cityNameParam
      }
    });
  }
});