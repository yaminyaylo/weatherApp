Ext.define('WeatherApp.model.Day', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'string' },
    { name: 'cod', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'dt', type: 'date', convert: function formatDate(v, record){return Ext.util.Format.date(new Date(parseInt(v)*1000), 'l, M d');}},
    { name: 'main', type: 'auto' },
    { name: 'weather', type: 'auto' },
    { name: 'wind', type: 'auto' },
    { name: 'sys', type: 'auto' }
  ]
 });