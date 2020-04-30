const express = require("express");

const Snacks = require('../snacks/snacks-model')

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

server.get("/api/snacks", (req, res) => {
    Snacks.getAll()
        .then(snacks => {
            res.status(200).json(snacks);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = server;
