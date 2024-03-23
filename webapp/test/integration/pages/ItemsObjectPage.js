sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zbrfsalescp.zbrfsalescp',
            componentId: 'ItemsObjectPage',
            contextPath: '/Orders/items'
        },
        CustomPageDefinitions
    );
});