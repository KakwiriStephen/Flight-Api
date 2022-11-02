const flights = require("./../models/Flight");

//Getting all Flights--get
exports.getAllFlights = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "API ",
            results: flights.length,
            data: {
                flights,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

// get one flight--get
exports.getOneFlight = (req, res) => {
    try {
        const flightId = req.params.id;
        const flight = flights.find((flight) => {
            return flight.id === Number(flightId);
        });
        res.status(200).json({
            status: "success",

            data: {
                flights: flight,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//create a flight-- post
exports.createFlight = (req, res) => {
    try {
        let newId = flights[flights.length - 1].id + 1;
        let newFlight = Object.assign({ id: newId }, req.body);
        const { location, title, time, price, date } = req.body;
        flights.push({
            id: newId,
            location: location,
            title: title,
            time: time,
            price: price,
            date: date,
        });

        res.status(201).json({
            status: "success",
            data: {
                flights: newFlight,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

//update flight--patch
exports.updateFlight = (req, res) => {
    try {
        const flightId = req.params.id;
        const { location, title, time, price, date } = req.body;

        flights = flights.map((flight) => {
            if (flight.id === flightId) {
                return {
                    id: flight.id,
                    location,
                    title,
                    time,
                    price,
                    date,
                };
            }
            return flight;
        });
        // res.json(flights)
        res.status(200).json({
            status: "success",
            results: flights.length,
            data: {
                flights,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//delete flight
exports.deleteFlight = (req, res) => {
    try {
        const flightId = req.params.id;
        flights = flights.filter((flight) => {
            return flight.id !== flightId;
        });

        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};