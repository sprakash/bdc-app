const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000; // Or any available port

app.use(cors()); // Enable CORS for all routes

app.get("/filmmaker-records", async (req, res) => {
  // eslint-disable-next-line no-debugger
  debugger;
  try {
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_FILMMAKERS_TABLE_ID}`;
    const headers = {
      method: "GET",
      Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
    };

    console.log(" process env ", process.env.AIRTABLE_BASE_ID);
    console.log(airtableUrl, " U R  L ", process.env.AIRTABLE_ACCESS_TOKEN);
    const response = await fetch(airtableUrl, { headers });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Airtable records:", error);
    res.status(500).json({ error: "Failed to fetch records" });
  }
});

app.get("/film-records", async (req, res) => {
  // eslint-disable-next-line no-debugger
  debugger;
  try {
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_FILMS_TABLE_ID}`;
    const headers = {
      method: "GET",
      Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
    };

    console.log(" process env ", process.env.AIRTABLE_BASE_ID);
    console.log(airtableUrl, " U R  L ", process.env.AIRTABLE_ACCESS_TOKEN);
    const response = await fetch(airtableUrl, { headers });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Airtable records:", error);
    res.status(500).json({ error: "Failed to fetch records" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
