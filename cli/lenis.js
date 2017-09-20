#!/usr/bin/env node

var program = require('commander');
var fs = require("fs")

var profilePath = './profile.json'
if (!fs.existsSync(profilePath)) {
  var defaultProfile = JSON.stringify({ tableName: "", tableConnectionString: "" }, null, 2)
  fs.writeFileSync(profilePath, defaultProfile);
}
var profile = require(profilePath);

program
  .version('0.0.1')
  .command('login <tableName> <tableConnectionString>')
  .description('login using Azure Storage table name and connection string')
  .action((tableName, tableConnectionString) => {
    profile.tableName = tableName
    profile.tableConnectionString = tableConnectionString;
    fs.writeFile(profilePath, JSON.stringify(profile, null, 2), (err) => {
      if (err) return console.log(err);
      console.log("Updated profile")
    });
  })

program
  .command('service', 'perform operations on services')

program.parse(process.argv);

if (program.args.length < 1) {
  program.help()
} else {
  if (!program._execs[program.args[0]]) {
    console.log('Unknown Command')
    program.help()
  }
}