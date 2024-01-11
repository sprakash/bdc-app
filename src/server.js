const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000; // Or any available port
const AIRTABLE_BASE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;

app.use(cors()); // Enable CORS for all routes

//apiRequest a single function can be called to execute requests.
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
    console.log(reqUrl, " U R  L ", process.env.AIRTABLE_ACCESS_TOKEN);
    const response = await fetch(reqUrl, { headers });
    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error("Error fetching Airtable records:", error);
    res.status(500).json({ error: "Failed to fetch records" });
  }
};
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
