const express = require("express");
const router = express.Router();
var soap = require("soap");

const url = "http://localhost:9090/?wsdl";
var args = { name: "value" };

router.get("/UnitTests", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.UnitTestResultsAll(args, function(err, result) {
        if (result && result.UnitTestResultsAllResult) {
            let testResult = result.UnitTestResultsAllResult.string.map(
                item => {
                    return JSON.parse(item);
                }
            );
            res.send(testResult);
        } else {
            return res.status(404).send("No data found");
        }
    });
});

router.get("/UnitTests/GetNonPassingTest", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.GetNonPassingTest(args, function(err, result) {
        if (result && result.GetNonPassingTestResult) {
            let testResult = result.GetNonPassingTestResult.string.map(item => {
                return JSON.parse(item);
            });
            res.send(testResult);
        } else {
            return res.status(404).send("No data found");
        }
    });
});

router.get("/UnitTests/GetPassingTest", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.GetPassingTest(args, function(err, result) {
        if (result && result.GetPassingTestResult) {
            let testResult = result.GetPassingTestResult.string.map(item => {
                return JSON.parse(item);
            });
            res.send(testResult);
        } else {
            return res.status(404).send("No data found");
        }
    });
});

router.get("/UnitTests/GetFailedTest", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.GetFailedTest(args, function(err, result) {
        if (result && result.GetFailedTestResult) {
            let testResult = result.GetFailedTestResult.string.map(item => {
                return JSON.parse(item);
            });
            res.send(testResult);
        } else {
            return res.status(404).send("No data found");
        }
    });
});

router.get("/UnitTests/GetInfo", async (req, res) => {
    console.log(req.query);
    const client = await soap.createClientAsync(url);
    client.GetInfo(
        { testName: req.query.testName, filterType: req.query.filterType },
        function(err, result) {
            if (result && result.GetInfoResult) {
                if (Array.isArray(result.GetInfoResult.string)) {
                    let testResult = result.GetInfoResult.string.map(item => {
                        return JSON.parse(item);
                    });
                    res.send(testResult);
                } else {
                    let testResult = new Array();
                    testResult.push(JSON.parse(result.GetInfoResult.string));
                    res.send(testResult);
                }
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

module.exports = router;
