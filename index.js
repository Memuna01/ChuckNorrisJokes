#!/usr/bin/env node //shebang to make my app available globally

var chalk       = require('chalk'); // colorizes the output
var clear       = require('clear'); // clears the terminal screen
var CLI         = require('clui'); // draws command line tables, gauges and spinners
var figlet      = require('figlet'); // creates ASCII art from text
var inquirer    = require('inquirer'); // creates interactive command line user interface
var minimist    = require('minimist'); // parses argument options
var Spinner     = CLI.Spinner;
var axios       = require('axios'); // Promise based HTTP client for the browser and node.js


clear(); // clears the console
// displays the name of my application
console.log(
  chalk.yellow(
    figlet.textSync('ChuckNorris', { horizontalLayout: 'full' })
  )
);

function getUserInput(callback){
  var questions = [
    {
      name: 'getJokes',
      type: 'input',
      message: 'Would you like to read a Chuck Norris joke?(yes/no):',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your request:';
        }
      }
    }
  ];

  //inquirer creates interactive user interface and passes value received as arguments to the getUserInput function
  inquirer.prompt(questions).then(callback);
}

// Immediately invoked function to call my function immediately. it is neat and is also safe code i.e, 
// it protects my code from being accessed from the global scope

(function fetchChuckNorrisJoke(){
  //Invoking my getUserInput function with a callback function passed in
  
    getUserInput(function(){
        if(JSON.stringify(arguments[0]) === JSON.stringify({getJokes: 'yes'})){
            var status = new Spinner('Fetching a Chuck Norris joke, please wait...');
            status.start();
        axios.get('https://api.chucknorris.io/jokes/random') //gets a joke from the chuck norris api at the given url
        .then(function(response){
            status.stop();
            console.log(chalk.green(response.data.value)); // displays the chuck norris joke
            //console.log(response.status); // displays response status e.g 200
        });         
      }else{
          process.exit();
      }
    });
})();