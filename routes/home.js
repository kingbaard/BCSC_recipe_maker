"use strict";

const router = require("express").Router(),
    homeController = require("../controllers/homeController")

router.get("/", homeController.viewIndex);
router.get("/help", homeController.viewHelp)
module.exports = router;