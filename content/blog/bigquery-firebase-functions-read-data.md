+++
title = "How to read data from BigQuery using Firebase Functions"
date = 2022-01-27T09:00:00-08:00
tags = ["BigQuery","Firebase","Node.js","JavaScript"]
+++
An alternative title to this article could have been, "How to Access BigQuery from iOS". I'm working on a SwiftUI app that needs to read data from BigQuery. There are several [BigQuery API Client Libraries](https://cloud.google.com/bigquery/docs/reference/libraries), but none are in Swift or Objective-C. There is a Node.js library. My SwiftUI app happens to use Firebase, which supports hosting Node.js code. So the decision is easy. I'll use Node.js and Firebase.

*A different approach could use the [BigQuery REST API](https://cloud.google.com/bigquery/docs/reference/rest). There are couple of reasons why I chose to take the Node.js/Firebase Functions approach. (1) using a pre-built library can make development easier/quicker (2) In my use case, I want to do some data processing on the results, which makes sense to do on the backend, before returning to the frontend.*

This article shows a very basic example of how to read data from a BigQuery table using Firebase Functions. This article does not show how to setup BigQuery as it's unnecessary for this article. For demo purposes, this article uses the publicly available, **BigQuery Air Quality Data Set**. For other public data sets, please visit [https://cloud.google.com/bigquery/public-data](https://cloud.google.com/bigquery/public-data).

## Pre-requistes

Follow the relevent [Firebase Documentation](https://firebase.google.com/docs/functions/get-started) to setup your project.
* [Create a Firebase Project](https://firebase.google.com/docs/functions/get-started#create-a-firebase-project)
* [Setup Node.js and the Firebase CLI](https://firebase.google.com/docs/functions/get-started#set-up-node.js-and-the-firebase-cli)
* [Initialize your project](https://firebase.google.com/docs/functions/get-started#initialize-your-project)

## 1. Install Node.js BigQuery Library

First, install the Node.js BigQuery client library:
```
cd path/to/project/functions
npm install @google-cloud/bigquery
```

## 2. Implement

In this step, we are going to create a [callable](https://firebase.google.com/docs/functions/callable) Firebase Function using JavaScript. The function is going to get the 10 most polluted cities in the world and return them in the response.

*Instead of a callable function, we could write an HTTP function using [functions.https.onRequest](https://firebase.google.com/docs/functions/get-started#add-the-addmessage-function). My use-case required a callable function, so that is what I'm showing here.*

Open **functions/index.js** in a code editor.

Import the BigQuery client library
```
const {BigQuery} = require('@google-cloud/bigquery');
```

Add the following function:
```
exports.getMostPolluted = functions.https.onCall((data, context) => {
  // 1. Create BigQuery client.
  const bigQuery = new BigQuery();

  // 2. Define the query.
  const query = 'SELECT location, city, country, value, timestamp FROM `bigquery-public-data.openaq.global_air_quality` WHERE pollutant = "pm25" AND timestamp > "2020-01-01" ORDER BY value DESC LIMIT 10';

  // 3. Run the query and return the result.
  return bigQuery.query(query)
    .then(function(data) {
      const rows = data[0];
      return rows;
    });
});
```

## 3. Test
Firebase has a super handy emulator and shell for testing your code before deploying to production. 

Open your terminal and navigate to the root directory of your Firebase project:
```
cd /path/to/project
```

Start the emulator by running the following command:
```
firebase emulators:start
```

Open another terminal window, navigate to the root directory of your project, and start the Firebase Functions Shell:
```
firebase functions:shell
```

In the shell window, run the following to test our function:
```
getMostPolluted({});
```

The output should include something like:
```
RESPONSE RECEIVED FROM FUNCTION: 200, {
  "result": [
    {
      "location": "Sirifort, Delhi - CPCB",
      "city": "Delhi",
      "country": "IN",
      "value": 1978,
      "timestamp": {
        "value": "2020-03-30T06:45:00.000Z"
      }
    },
    {
      "location": "ES1573A",
      "city": "Las Palmas",
      "country": "ES",
      "value": 1000,
      "timestamp": {
        "value": "2020-06-04T02:00:00.000Z"
      }
    },
    ...
    ..
    .
  ]
}
```

## 4. Deploy
Looks like our function worked in the shell. Let's deploy it to production. Please note, you will need to be on a paid Firebase plan for this to work. Run the following from a terminal window.
```
cd /path/to/project
firebase deploy --only functions:getMostPolluted
```

## 5. Conclusion
In this article, I showed how to create a simple Firebase Function to read data from BigQuery. You can find a gist of the completed function [here](https://gist.github.com/harrisonrw/feb6acbcf668b1a68553948eda2b1379).

There are several next steps that could be taken. Here are some ideas.

1. Process the data before returning the response to the frontend application.

2. Insert the data into Realtime Database or Firestore.

3. Call the Firebase Function from your application. Here is an example of calling the function using the Firebase SDK using Swift 5.5:
```
let result = try await functions.httpsCallable("getMostPolluted").call()
```

That is all for now. Thank you for reading. Feel free to ask questions or leave comments [@robwh99](https://twitter.com/robwh99).