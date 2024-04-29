'use strict';

var utils = require('../utils/writer.js');
var Part = require('../service/PartService');

module.exports.downloadPart = function downloadPart (req, res, next, fileName) {
  /*Part.downloadPart(fileName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
  const path = './data/ldraw/parts/' + fileName;
  res.status(200).download(path, fileName);
};

module.exports.download = function download (req, res, next, type) {
  /*Part.downloadPart(fileName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
  if (type === 'primitive') {
    const path = './data/ldraw.zip';
    res.status(200).download(path, 'ldraw.zip');
  }
  else {
    res.status(404).json({
      message: 'error downloading data'
    });
  }
};

module.exports.getParts = function getParts (req, res, next, category) {
  Part.getParts(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
