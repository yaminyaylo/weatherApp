Ext.define('WeatherApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'WeatherApp.view.Main'
    ],
    layout: {
        type: 'fit'
    },
    items: [{
        xtype: 'app-main'
    }]
});
