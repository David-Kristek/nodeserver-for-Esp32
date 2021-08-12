const router = require("express").Router();

const SenzorController = require("../controller/SenzorController"); 

router.post("/", SenzorController.getSenzorValues);

module.exports = router;
