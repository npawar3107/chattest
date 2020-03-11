<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
function testfun(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

        embedded_svc.settings.defaultMinimizedText = 'Agent Online'; //(Defaults to Chat with an Expert)
        embedded_svc.settings.disabledMinimizedText = 'Agent Offline'; //(Defaults to Agent Offline)
        embedded_svc.settings.avatarImgURL = "https://customer-zukl--capitachat--c.cs86.visual.force.com/resource/1583918304000/AgentIcon";
        embedded_svc.settings.chatbotAvatarImgURL = "https://customer-zukl--capitachat--c.cs86.visual.force.com/resource/1583918304000/BotIcon";
        
        //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

        // Settings for Chat
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
            // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
            // Returns a valid button ID.
        
        
        //};
        
        embedded_svc.settings.extraPrechatInfo = [{
  "entityFieldMaps": [{
    "doCreate":true,
    "doFind":true,
    "fieldName":"LastName__c",
    "isExactMatch":true,
    "label":"Last Name"
  }, {
    "doCreate":true,
    "doFind":true,
    "fieldName":"FirstName__c",
    "isExactMatch":true,
    "label":"First Name"
  },{
    "doCreate":true,
    "doFind":true,
    "fieldName":"Email__c",
    "isExactMatch":true,
    "label":"Email"
  }],
  "entityName":"WebChat_Contact__c",
  "showOnCreate": false,
  "saveToTranscript":"WebChat_Contact__c"
},
{
  "entityFieldMaps": [{
    "doCreate":false,
    "doFind":false,
    "fieldName":"LastName",
    "isExactMatch":true,
    "label":"Last Name"
  }, {
    "doCreate":false,
    "doFind":false,
    "fieldName":"FirstName",
    "isExactMatch":true,
    "label":"First Name"
  }, {
    "doCreate":false,
    "doFind":false,
    "fieldName":"Email",
    "isExactMatch":true,
    "label":"Email"
  }],
  "entityName":"Contact"
}
];
        
        //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init(
            'https://customer-zukl--CapitaChat.cs86.my.salesforce.com',
            'https://capitachat-futureyou.cs86.force.com/',
            gslbBaseURL,
            '00D7E0000001Xbj',
            'Swindon_Web_Chat',
            {
                baseLiveAgentContentURL: 'https://c.la1-c1cs-lo2.salesforceliveagent.com/content',
                deploymentId: '5727E00000000la',
                buttonId: '5737E000000016H',
                baseLiveAgentURL: 'https://d.la1-c1cs-lo2.salesforceliveagent.com/chat',
                eswLiveAgentDevName: 'Swindon_Chat',
                isOfflineSupportEnabled: false
            }
        );
}
