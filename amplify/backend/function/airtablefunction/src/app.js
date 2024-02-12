/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	AIRTABLE_BASE_ID
	AIRTABLE_FILMMAKERS_TABLE_ID
	AIRTABLE_FILMS_TABLE_ID
	AIRTABLE_ACCESS_TOKEN
	BASE_URL
Amplify Params - DO NOT EDIT */

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const AIRTABLE_BASE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;

const axios = require("axios");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/testing", async (req, res) => {
  return apiRequest(
    `${AIRTABLE_BASE_URL}/${process.env.AIRTABLE_FILMMAKERS_TABLE_ID}`,
    req,
    res
  );
});
app.get("/filmmaker-records", async (req, res) => {
  return apiRequest(
    `${AIRTABLE_BASE_URL}/${process.env.AIRTABLE_FILMMAKERS_TABLE_ID}`,
    req,
    res
  );
});

app.get("/film-records", async (req, res) => {
  return apiRequest(
    `${AIRTABLE_BASE_URL}/${process.env.AIRTABLE_FILMS_TABLE_ID}`,
    req,
    res
  );
});

const apiRequest = async (reqUrl, req, res) => {
  try {
    const headers = {
      method: "GET",
      Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
    };

    console.log(" process env ", process.env.AIRTABLE_BASE_ID);
    console.log(
      reqUrl,
      " U R  L REMOVE this updated",
      process.env.AIRTABLE_ACCESS_TOKEN
    );
    const response = await axios.request({ url: reqUrl, headers });
    const data = await response.json();
    console.log("RESPONSE has this data ", data);
    return res.json(data);
  } catch (error) {
    console.log("THERE IS A PROBLEM");
    console.error("Error fetching Airtable records:", error);
    res.status(500).json({ error: "Failed to fetch records" });
  }
};
app.listen(3000, () => {
  console.log(`Proxy server listening on port 3000`);
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
