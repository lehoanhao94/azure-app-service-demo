(function (KoreSDK) {
    var KoreSDK = KoreSDK || {};

    var botOptions = {};
    botOptions.logLevel = "debug";
    botOptions.koreAPIUrl = "https://jp-bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = ""; //deprecated
    //botOptions.bearer = "bearer xyz-------------------";
    //botOptions.ttsSocketUrl = '';//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = "../libs/recorderWorker.js";

    botOptions.JWTUrl =
        "https://bot-kore-ai.azurewebsites.net/api/jwt_service?code=BmhEPKY/y9Rig5gGPgYsz05d21QA7xOplRMh6IpJuZfqdG/Yq1IjsQ==";
    botOptions.userIdentity = uuidv4(); // Provide users email id here

    botOptions.botInfo = {
        name: "Chat bot demo",
        _id: "st-86496a50-0d3e-57fa-abba-99feb53258c4",
        customData: {
            sfno: getSfno(),
            user_uuid: botOptions.userIdentity,
        },
    }; // bot name is case sensitive
    botOptions.clientId = "cs-5904ecdf-467b-5b0e-85a6-5aa51d1d2a3f";
    botOptions.clientSecret = "";

    var chatConfig = {
        botOptions: botOptions,
        allowIframe: false, // set true, opens authentication links in popup window, default value is "false"
        isSendButton: false, // set true, to show send button below the compose bar
        isTTSEnabled: false, // set true, to hide speaker icon
        ttsInterface: "webapi", // webapi or awspolly , where default is webapi
        isSpeechEnabled: false, // set true, to hide mic icon
        allowGoogleSpeech: true, // set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
        allowLocation: false, // set false, to deny sending location to server
        loadHistory: false, // set true to load recent chat history
        messageHistoryLimit: 10, // set limit to load recent chat history
        autoEnableSpeechAndTTS: false, // set true, to use talkType voice keyboard.
        graphLib: "d3", // set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey: "",
        minimizeMode: false, // set true, to show chatwindow in minimized mode, If false is set remove #chatContainer style in chatwindow.css
        multiPageApp: {
            enable: false, //set true for non SPA(Single page applications)
            userIdentityStore: "localStorage", //'localStorage || sessionStorage'
            chatWindowStateStore: "localStorage", //'localStorage || sessionStorage'
        },
        supportDelayedMessages: true, // enable to add support for renderDelay in message nodes which will help to render messages with delay from UI
        pickersConfig: {
            showDatePickerIcon: false, //set true to show datePicker icon
            showDateRangePickerIcon: false, //set true to show dateRangePicker icon
            showClockPickerIcon: false, //set true to show clockPicker icon
            showTaskMenuPickerIcon: false, //set true to show TaskMenu Template icon
            showradioOptionMenuPickerIcon: false, //set true to show Radio Option Template icon
        },
    };
    /* 
        allowGoogleSpeech will use Google cloud service api.
        Google speech key is required for all browsers except chrome.
        On Windows 10, Microsoft Edge will support speech recognization.
     */

    KoreSDK.chatConfig = chatConfig;
})(window.KoreSDK);
