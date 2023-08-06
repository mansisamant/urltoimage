//i acciddentally made a website that screenshots the url links page
//bear with me future millie +(skull face emoji)
import inquirer from "inquirer";
import urlToImage from  'url-to-image';

inquirer
  .prompt([
    /* Pass your questions in here */
    //see properties from documentation on google npmjs.com
  {"message" : "Type in your url" , name : "URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    urlToImage(url, 'google.png').then(function() {
    // now google.png exists and contains screenshot of google.com
}).catch(function(err) {
    console.error(err);
});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



 

 