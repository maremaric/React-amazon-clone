const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51HrMP9BUKmJYf7xtI0qB1dcdzCedZyDSxrdrTix5wTNVXfTgiVjE6A9Fwh77SD4kmSiqmRH4aR8CYnmNM3pVEH2300I3PnKK1W');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Receved BOOm!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, /* subunits of the currency */
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-40911/us-central1/api