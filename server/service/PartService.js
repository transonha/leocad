'use strict';


/**
 * returns all registered parts
 *
 * category String 
 * returns List
 **/
exports.getParts = function(category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
      "fileName" : "23714.dat",
      "description" : "Animal Ant"
    }, {
      "fileName" : "62575p01.dat",
      "description" : "Animal Ant with Marbled Trans Black Pattern"
    }, {
      "fileName" : "30103.dat",
      "description" : "Animal Bat"
    }, {
      "fileName" : "37720b.dat",
      "description" : "Animal Bat Emblem  1 x  2"
    }, {
      "fileName" : "37720e.dat",
      "description" : "Animal Bat Emblem  2 x  5"
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

