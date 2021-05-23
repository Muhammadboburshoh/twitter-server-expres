"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/signin', function (req, res) {
    console.log("abdulloh");
    res.send("LODGIN");
});
exports.default = router;
