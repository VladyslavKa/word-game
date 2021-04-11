const express = require('express');
const STATIC_PATH = `${process.cwd()}/dist`;

module.exports.init = (app) => app.use(express.static(STATIC_PATH));
