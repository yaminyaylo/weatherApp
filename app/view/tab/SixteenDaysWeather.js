Ext.define('WeatherApp.view.tab.SixteenDaysWeather', {
  extend: 'Ext.view.View',
  requires: 'WeatherApp.templates.Day',
  store: 'SixteenDaysCityWeather',

  alias: 'widget.sixteen-days-weather',
  itemSelector: 'div.day-weather-box',
  emptyText: 'No weather activity.',
  itemId: 'SixteenDaysWeather',
  loadMask: true,

  initComponent: function () {
    // WeatherApp.templates.Day.create({});
    this.tpl = Ext.create('WeatherApp.templates.Day');
    this.callParent();
  }
});