sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'train/riskapp/test/integration/FirstJourney',
		'train/riskapp/test/integration/pages/RisksList',
		'train/riskapp/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('train/riskapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);