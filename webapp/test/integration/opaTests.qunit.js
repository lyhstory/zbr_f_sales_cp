sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zbrfsalescp/zbrfsalescp/test/integration/FirstJourney',
		'zbrfsalescp/zbrfsalescp/test/integration/pages/OrdersList',
		'zbrfsalescp/zbrfsalescp/test/integration/pages/OrdersObjectPage',
		'zbrfsalescp/zbrfsalescp/test/integration/pages/ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage, ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zbrfsalescp/zbrfsalescp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage,
					onTheItemsObjectPage: ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);