const express = require("express");
const { internalOnly } = require("./middleware");
const { default: axios } = require("axios");

const app = express();

app.get("/internal", internalOnly, (req, res) => {
    res.json({ msg: "working" });
});

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:2000/internal");
        res.json({ data: response.data });
    } catch (error) {
        res.json({ error });
    }
});

app.listen(2000, () => {
    console.log("running on port 2000");
});
