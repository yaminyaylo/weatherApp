Ext.define('WeatherApp.view.tab.WeekWeather', {
  extend: 'Ext.view.View',
  requires: 'WeatherApp.templates.FiveDays',
  store: 'SixteenDaysCityWeather',

  alias: 'widget.week-weather',
  itemSelector: 'div.day-weather-box',
  emptyText: 'No weather activity.',
  itemId: 'WeekWeather',
  loadMask: true,

  initComponent: function () {
    this.tpl = Ext.create('WeatherApp.templates.FiveDays');
    this.callParent();
  }
});