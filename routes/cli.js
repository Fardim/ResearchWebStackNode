const express = require("express");
const router = express.Router();
var soap = require("soap");

const url = "http://localhost:9090/?wsdl";
var args = { name: "value" };

router.get("/a", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args:
                "runNodeJs here true false true nodeApp applyWriteToFile redirectPath"
        },
        function(err, result) {
            
            // return res.send(result.CommandProcessorResult);
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                // let testResult = data.map(item => {
                //     return JSON.parse(item);
                // });
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/b", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args:
                "runPython here true false true pythonApp applyWriteToFile redirectPath"
        },
        function(err, result) {
            
            // return res.send(result.CommandProcessorResult);
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                // let testResult = data.map(item => {
                //     return JSON.parse(item);
                // });
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/c", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args:
                "cmd here true false true FilePath applyWriteToFile redirectPath"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/d", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args:
                "cmd Script true false true FilePath applyWriteToFile redirectPath"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/e", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args:
                "ps Script true false true FilePath applyWriteToFile redirectPath"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/f", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args:
                "ps FilePath true false true FilePath applyWriteToFile redirectPath"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/g", async (req, res) => {
    const client = await soap.createClientAsync(url);
    const query = req.query.testName + " " + req.query.filterType;
    client.CommandProcessor(
        {
            args: "UnitTests here true false true getInfo "+query
        },
        function(err, result) {
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                let testResult = data.map(item => {
                    return JSON.parse(item);
                });
                res.send(testResult);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/h", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args: "UnitTests here true false true getFailedTest"
        },
        function(err, result) {
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                let testResult = data.map(item => {
                    return JSON.parse(item);
                });
                res.send(testResult);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/i", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args: "UnitTests here true false true getNonPassingTest"
        },
        function(err, result) {
            
            // return res.send(result.CommandProcessorResult);
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                let testResult = data.map(item => {
                    return JSON.parse(item);
                });
                res.send(testResult);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/j", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args:
                "registry addOrUpdate true false true appnamekey value 'value'"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/k", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args: "registry delete true false true appnamekey"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/l", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args: "registry add true false true appnamekey value 'value'"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

router.get("/m", async (req, res) => {
    const client = await soap.createClientAsync(url);
    client.CommandProcessor(
        {
            args: "registry set true false true appnamekey value 'value'"
        },
        function(err, result) {
            
            if (result.CommandProcessorResult) {
                let data = JSON.parse(result.CommandProcessorResult);
                res.send(data);
            } else {
                return res.status(404).send("No data found");
            }
        }
    );
});

module.exports = router;
