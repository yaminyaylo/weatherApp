Ext.define('WeatherApp.view.MainContainer', {
    extend: 'Ext.TabPanel',
    requires:[
      'Ext.layout.container.HBox',
      'Ext.view.View'
    ],
    alias: 'widget.main-container',
    store: 'City',
    region: 'center',
    activeTab: 0,
    itemId: 'MainContainer',
    cls: 'main-container-body',
    defaults :{
      autoScroll: true,
      bodyPadding: 10
    },
    items:[{
      title: 'Today',
      itemId: 'currentWeatherTab',
      items:[{
        xtype: 'current-weather',
      }]
    },{
      title: 'Week',
      disabled: true,
      itemId: 'weekWeatherTab',
      items:[{ 
        xtype: 'week-weather'
      }]
    },{
      title: '16 days',
      disabled: true,
      itemId: 'sixteenDaysWeatherTab',
      items:[{ 
        xtype: 'sixteen-days-weather'
      }]
    }]
});