import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import App from './App';
import Amplify, { Storage } from 'aws-amplify';
import config from './config';
import * as serviceWorker from './serviceWorker';


Amplify.configure({
    Auth: {
        identityPoolId: "us-east-1:eac621f2-c9ce-4bca-aaee-efe1d79ca5bb",
        mandatorySignId: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: { 
        bucket: config.s3.BUCKET_NAME,
        region: config.s3.REGION
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
