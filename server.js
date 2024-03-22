var express = require("express");
var app = express();
var port = process.env.PORT || 3000; // 

app.use(express.urlencoded({ extended: true }));

app.get('/addTwoNumbers', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) { // 
        return res.status(400).json({ error: 'NUMBERS SHOULD BE VALID NUMBERS' }); //
    }

    const sum = num1 + num2;
    res.json({ result: sum });
});

app.listen(port, () => {
    console.log("App listening to: " + port);
});
