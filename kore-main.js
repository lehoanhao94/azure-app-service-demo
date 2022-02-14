(function ($) {
    $(document).ready(function () {
        function assertion(options, callback) {
            var jsonData = {
                clientId: options.clientId,
                clientSecret: options.clientSecret,
                identity: options.userIdentity,
                aud: "",
                isAnonymous: false,
            };
            $.ajax({
                url: options.JWTUrl,
                type: "post",
                data: JSON.stringify(jsonData),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log("get jwt succeed!");
                    options.assertion = data.jwt;
                    options.handleError = koreBot.showError;
                    options.chatHistory = koreBot.chatHistory;
                    options.botDetails = koreBot.botDetails;
                    callback(null, options);
                    setTimeout(function () {
                        if (koreBot && koreBot.initToken) {
                            koreBot.initToken(options);
                        }
                    }, 2000);
                },
                error: function (err) {
                    koreBot.showError(err.responseText);
                },
            });
        }

        var chatConfig = window.KoreSDK.chatConfig;
        chatConfig.botOptions.assertionFn = assertion;

        var koreBot = koreBotChat();
        koreBot.show(chatConfig);
        $(".openChatWindow").click(function () {
            koreBot.show(chatConfig);
        });
    });
})(
    jQuery ||
        (window.KoreSDK &&
            window.KoreSDK.dependencies &&
            window.KoreSDK.dependencies.jQuery)
);
