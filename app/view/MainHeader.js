Ext.define('WeatherApp.view.MainHeader', {
    extend: 'Ext.container.Container',
    alias: 'widget.main-header',
    requires:[
        'Ext.Component',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.tab.Panel'
    ],
    region: 'north',
    layout: 'hbox',
    padding: '10',
    items:[{
      xtype: 'component',
      html: 'Weather Forecast',
      cls: 'head-title'
    },{
      itemId: 'searchBox',
      xtype: 'textfield',
      // name: 'searchBox',
      emptyText: 'Please enter city name',
      // value: 'Lviv',
      width: 200,
      padding: '0 5 0 0',
      listeners: {
        specialkey: function(field, e) {
          if (field.getValue()) { 
            if (e.getKey() == e.ENTER) {
              this.fireEvent('search');
            }
          }
        },
        afterrender: function(field) {
          field.focus(false, 1000);
        }
      }
    },{
      itemId: 'searchButton',
      xtype: 'button',
      action: 'search',
      text: 'Search'
    }]
});