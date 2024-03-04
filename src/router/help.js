const express = require("express");
const Help = require("../models/help");
const router = new express.Router()


router.post("/help",  async (req, res) => {
    const help = await Help.create(req.body);
    console.log(help)
    try {
      // await help.save();
      res.status(201).send({ help });
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  module.exports = router;