const express = require("express");

const app = express();

app.use(express.json());

app.post("/vendorA", (req, res) => {

    console.log("Vendor A Request:", req.body);

    res.json({
        result: {
            status: "VALID",
            valid: true,
            vendor: "VendorA"
        }
    });

});

app.listen(4000, () => {
    console.log("Vendor A running on port 4000");
});