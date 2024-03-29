const { initializeAppCheck, getToken } = require('firebase/app-check');

const appCheck = initializeAppCheck(
    app, { provider: provider } // ReCaptchaV3Provider or CustomProvider
);

const callApiWithAppCheckExample = async() => {
    let appCheckTokenResponse;
    try {
        appCheckTokenResponse = await getToken(appCheck, /* forceRefresh= */ false);
    } catch (err) {
        // Handle any errors if the token was not retrieved.
        return;
    }

    // Include the App Check token with requests to your server.
    const apiResponse = await fetch('https://yourbackend.example.com/yourApiEndpoint', {
        headers: {
            'X-Firebase-AppCheck': appCheckTokenResponse.token,
        }
    });

    // Handle response from your backend.
};
