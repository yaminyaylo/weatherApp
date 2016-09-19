Ext.define('WeatherApp.Application', {
    name: 'WeatherApp',
    extend: 'Ext.app.Application',
    views: ['Main', 'MainHeader','MainContainer', 'tab.CurrentWeather', 'tab.WeekWeather', 'tab.SixteenDaysWeather'],
    controllers: ['Main'],
    models: ['Day', 'Days'],
    stores: ['CityWeather', 'WeekCityWeather', 'SixteenDaysCityWeather'],
    templates: ['CurDay', 'Day', 'FiveDays']
});
