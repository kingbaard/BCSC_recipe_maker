"use strict";

const router = require("express").Router(),
    homeController = require("../controllers/homeController")

router.get("/", homeController.viewIndex);

module.exports = router;