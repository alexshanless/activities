const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt(
    [
        {
             type: 'input',
             message: 'What is your name?',
             name: 'username'
},
      {
          type: 'checkbox',
          message: 'What languages do you know?',
          name: 'languages',
          choices: [
'HTML',
'CSS',
'Javascript'
          ]
      },
      {
          type: 'input',
          message: 'What is your preferred method of communciation?',
          name: 'method'
      }
]
).then(function(responses){
    fs.writeFile(`${responses.name}.json`, JSON.stringify(responses,null, '\t'),function(err){
        if (err){
            return console.log(err)
        }
    console.log(`Here are your answers: ${JSON.stringify(responses)}`);
    });