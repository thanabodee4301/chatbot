'use strict';
const bodyParser = require('body-parser');
const express = require('express');

exports.test = (req,res)=> {
    var returnMessage = "";
    if(req.body.message == 'hi') {
        returnMessage = 'Hello'
    }
    if(req.body.message == 'test') {
      returnMessage == '555555'
    }
    if(req.body.message == 'ไง') {
        returnMessage = 'ว่าไง'
    } 
    if(req.body.message == 'okokok') {
        returnMessage = 'ok ไรวะ'
    }
    else {
        returnMessage = 'Hello :)';
    }
    res.status(200).send(returnMessage);
  }