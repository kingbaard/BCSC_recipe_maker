
const router = require("express").Router(),
    homeRoutes = require("./home"),
    recipeRoutes = require("./recipe"),
    authRoutes = require("./auth");

router.use("/recipe", recipeRoutes);
router.use("/auth", authRoutes);
router.use("/", homeRoutes);

module.exports = router;
