'use strict';


/**
 * returns all registered categories
 *
 * returns List
 **/
exports.getCategories = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
      "keywords" : "^%Animal | ^%Bone",
      "name" : "Animal",
      "parts" : [ {
        "fileName" : "fileName",
        "description" : "description"
      }, {
        "fileName" : "fileName",
        "description" : "description"
      } ]
      }, {
          "keywords" : "^%Antenna",
          "name" : "Antenna"
        },
        {
          "keywords" : "^%Arch",
          "name" : "Arch"
        },
        {
          "keywords" : "^%Bar",
          "name" : "Bar"
        },
        {
          "keywords" : "^%Baseplate | ^%Platform",
          "name" : "Baseplate"
        }
      ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

