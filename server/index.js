const express = require("express");
const unirest = require("unirest");

const app = express();

app.set("port", process.env.PORT || 3001);

app.get("/api/cards", (req, res) => {

    res.type('application/json');

    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
	.header("X-Mashape-Key", "WOcB5NxA24mshbQ6vstOp5V42WPWp1d1toPjsnEc6mSXVWpNeC")
	.end(function (result) {
        res.json(result.body);
	});


});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
