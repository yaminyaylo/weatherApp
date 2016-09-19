Ext.define('WeatherApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
      'Ext.layout.container.Border',
      'WeatherApp.view.MainHeader',
      'WeatherApp.view.MainContainer'
    ],
    alias: 'widget.app-main',
    layout: {
      type: 'border'
    },
    items: [{
      xtype: 'main-header'
    },{
      xtype: 'main-container'
    }]
});