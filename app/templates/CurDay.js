Ext.define('WeatherApp.templates.CurDay', {
  extend: 'Ext.XTemplate',
  tpl: [
    '<div class="day-weather-wrap">',
    '<div class="day-weather-title">',
      '<div class="parameter"><label>City:</label></div>', 
      '<div class="parameter"><label>Description:</label></div>',
      '<div class="parameter"><label>Current temp.:</label></div>',
      '<div class="parameter"><label>Humidity:</label></div>',
      '<div class="parameter"><label>Pressure:</label></div>',
      '<div class="parameter"><label>Wind speed:</label></div>',
    '</div>',
  	'<tpl for=".">',
      '<div class="day-weather-box">',
        '<div class="parameter">{name} ({id}), {sys.country}</div>',
        '<div class="parameter"{dt}</div>',
        '<tpl for="weather">',    
          '<div class="parameter">{description}</div>',
        '</tpl>',
        '<div class="parameter">{main.temp}°C</div>',
        '<div class="parameter">{main.humidity}%</div>',
        '<div class="parameter">{main.pressure} hPa</div>',
        '<div class="parameter">{wind.speed} meter/sec</div>',
      '</div>',
  '</tpl>',
  '</div>'
  ],

  constructor: function (){
  	this.callParent(this.tpl);
  }
  
 });