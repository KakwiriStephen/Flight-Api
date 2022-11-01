const express = require("express");
const flightRouter = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/api/flights", flightRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});