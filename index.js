var chalk       = require('chalk'); // colorizes the output
var clear       = require('clear'); // clears the terminal screen
var CLI         = require('clui'); // draws command line tables, gauges and spinners
var figlet      = require('figlet'); // creates ASCII art from text
var inquirer    = require('inquirer'); // creates interactive command line user interface
var minimist    = require('minimist'); // parses argument options
var Preferences = require('preferences'); //manage CLI application encrypted preferences
var Spinner     = CLI.Spinner;
var _           = require('lodash'); // Javascript utility library
var git         = require('simple-git')(); // runs Git commands in a Node.js application
var touch       = require('touch'); // implementation of the *Nix touch command
var fs          = require('fs');


clear();
console.log(
  chalk.yellow(
    figlet.textSync('ChuckNorris', { horizontalLayout: 'full' })
  )
);
