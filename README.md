Stuff based on Espruino and IBM Watson API. You can use it to manage whatever you want with your voice.

This is very first version. No Espruino specific code yet. It checks IBM Watson API and its powerful Speech to Text service.

## Start Locally

### Get YaaS

You need YaaS to use their nice Email service

1. Create an account at https://yaas.io

2. Create new Project and Client

3. Write down your projectId, clientName and its clientId and clientSecret.

### Get Bluemix

You need Bluemix to use their nice Speech to Text service

1. Create an account at https://bluemix.net

2. Create an instance of the Speech to Text service:
     * In the Bluemix **Catalog**, select Speech to Text under service's Watson category
     * Select it and name it
     * Click **Create**

3. Open newly created service in your dashboard. Write down the username and password credentials.

### Get this project

1. Clone it: `git clone https://github.com/derberg/voice-control.git`

2. Install it: `npm install`

3. Save previously gathered credentials in config file in this project: `config/default.json`

4. Run the project: `npm start`

## TO_DO

1. Set up Espruino with WiFI module, power adapter and audio jack communication
2. Connect microphone to Espruino and make sure it is easy to send audio to it
3. Make it possible to get the audio and use with Watson API
4. Abstract the whole functionality in the way that you can connect any kind of code to it to react on what kind of text Espruino gets. For example make it simple to add a code that takes the interpreted text and:
* Sends it somewhere by email
* Gets the keywords and basing on them triggers different reactions
* Saves text in some external tool using its API
