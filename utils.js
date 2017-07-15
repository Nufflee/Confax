var fs = require('fs');

function recursiveReaddirSync(path) {
  var list = [];
  var files = fs.readdirSync(path);
  var stats;

  files.forEach((file) => {
    stats = fs.lstatSync(path + file);
    if(stats.isDirectory()) {
      list = list.concat(recursiveReaddirSync(path + file + "/"));
    } else {
      list.push(path + file);
    }
  });

  return list;
}

exports.recursiveReaddirSync = recursiveReaddirSync;
