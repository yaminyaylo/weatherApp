Ext.define('WeatherApp.templates.FiveDays', {
  extend: 'Ext.XTemplate',
  tpl: [
   '<div class="day-weather-wrap">',
    '<div class="day-weather-title">',
      '<div class="parameter"><label>Date:</label></div>', 
      '<div class="parameter"><label>Description:</label></div>',
      '<div class="parameter"><label>Min..max temp.:</label></div>',
      '<div class="parameter"><label>Humidity:</label></div>',
      '<div class="parameter"><label>Pressure:</label></div>',
      '<div class="parameter"><label>Wind speed:</label></div>',
    '</div>',
    '<tpl for=".">',
    '<tpl if="xindex &lt; 8">',            
      '<div class="day-weather-box">',
        '<div class="parameter">{dt}</div>',
        '<tpl for="weather">',    
          '<div class="parameter">{description}</div>',
        '</tpl>',
        '<div class="parameter">{temp.night}°C .. {temp.day}°C</div>',
        '<div class="parameter">{humidity}%</div>',
        '<div class="parameter">{pressure} hPa</div>',
        '<div class="parameter">{speed} meter/sec</div>',
      '</div>',
    '</tpl>',
    '</tpl>',
    '</div>'
  ],

  constructor: function (){
    this.callParent(this.tpl);
  }

 });