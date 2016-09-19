Ext.define('WeatherApp.model.Days', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'dt', type: 'date', convert: function formatDate(v, record){return Ext.util.Format.date(new Date(parseInt(v)*1000), 'l, M d');}},
    { name: 'humidity', type: 'string' },
    { name: 'pressure', type: 'string' },
    { name: 'speed', type: 'string' },
    { name: 'temp', type: 'auto' },
    { name: 'weather', type: 'auto' }
  ]
 });