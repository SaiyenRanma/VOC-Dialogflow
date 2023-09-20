const axios = require('axios');
const querystring = require('querystring');
const https = require('https');
import https from 'https';
// Replace with your own OAuth 2.0 API key
const apiKey = '103626845595521500332';
// Replace with your own project ID and session ID
const projectId = 'newagent-9nns';
const sessionId = '103626845595521500332';
// Replace with your own language code
const languageCode = 'en';
// Function to send a user message to Dialogflow retrieve the response
async function sendMessageToDialogflow(message) {
 try {
    // Create a new session
    const sessionPath = `projects/${projectId}/agent/sessions/${sessionId}`;
    // Set the request headers
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };
    // Set the request body
    const body = {
        sessionId: sessionPath,
        queryInput: {
          text: {
            text: message,
            languageCode: languageCode,
          },
        },
      };
    // Send the request to theflow API
    const response = await axios.post(
        'https://dialogflow.googleapis.com/v2/projects/newagent-9nns/agent/sessions/103626845595521500332:detectIntent',
        body,
        { headers: headers }
      );
      
    // Extract the response text from the API
    const responseText = response.data.queryResult.fulfillmentText;
 // Return the response text
    return responseText;
 } catch (error) {
    console.error('Error sending message to Dialogflow:', error);
  }
}

//The `axios` package is used to make HTTP requests to the Dialogflow API. It is used in the code to send a message to the Dialogflow API and retrieve the response.

//The `debug` package is used to log debugging information to the console. It is used in the code to log the request and response from the Dialogflow API.

//The `events` package is used to emit events. It is used in the code to emit an event when a message is received from the Dialogflow API.

//The `https` package is used to make HTTPS requests to the Dialogflow API. It is used in the code to send a message to the Dialogflow API and retrieve the response.

//The `querystring` package is used to parse and stringify query strings. It is used in the code to parse the query string in the request from the Dialogflow API.

//The `zlib` package is used to compress and decompress data. It is used in the code to compress the request and response from the Dialogflow API.

//turbo_modules/https@1.0.0/index.js explication: This module is a part of TurboModules, a set of JavaScript modules that provide access to native app functionality on iOS and Android. This particular module provides access to the HTTPS protocol, allowing you to make secure network requests to servers. It is used by the sendMessageToDialogflow function to send a message to the Dialogflow API over HTTPS.