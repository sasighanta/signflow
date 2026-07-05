const express = require("express");

const app = express();

app.use(express.json());

app.post("/vendorB", (req, res) => {

    console.log("Vendor B Request:", req.body);

    res.json({
        response: {
            code: 200,
            verification: true,
            source: "VendorB"
        }
    });

});

app.listen(4001, () => {
    console.log("Vendor B running on port 4001");
});