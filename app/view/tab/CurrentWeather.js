Ext.define('WeatherApp.view.tab.CurrentWeather', {
  extend: 'Ext.view.View',
  requires: 'WeatherApp.templates.CurDay',
  store: 'CityWeather',

  alias: 'widget.current-weather',
  itemSelector: 'div.day-weather-box',
  emptyText: 'No weather activity. Please enter city name.',
  itemId: 'CurrentWeather',
  loadMask: true,

  initComponent: function () {
    this.tpl = Ext.create('WeatherApp.templates.CurDay');
    this.callParent();
  }
});