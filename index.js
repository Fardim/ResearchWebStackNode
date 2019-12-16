var soap = require("soap");
const express = require("express");
const app = express();
const getTests = require("./routes/getTests");
const cli = require("./routes/cli");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", getTests);
app.use("/CLI", cli);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// var url = "http://localhost:9090/?wsdl";
// var args = { name: "value" };

// soap.createClient(url, function(err, client) {
//     client.GetInfo(args, function(err, result) {
//         console.log(result);
//     });
// });
