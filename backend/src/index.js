const express = require("express");
const mongoose = require("mongoose");
const codyParser = require("body-parser");
const requireDir = require("require-dir");
const path = require("path");

/**
 * Iniciando o App
 */
const server = express();

/**
 * Connectando com o Banco de dados
 */
mongoose.connect("mongodb://localhost:27017/odin", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

/**
 * Selecionando os models
 */
requireDir("./models");

const collection = "";

server.listen(3001, () => {
  console.log("⚙⚙⚙ Server Up");
});
