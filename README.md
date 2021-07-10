
:wave: Welcome to the SkyNews webPage Automated Scripts using Bdd Framework 

# OverView 
![](https://img.shields.io/badge/cypress-informational?style=flat&logo=cypress&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Bdd-informational?style=flat&logo=BDD&logoColor=green&color=2bbc8a)

- This repo contains an test scripts  written in Cypress using Bdd Framework.

- The tests are written to be directly compared to the  SkyNews Webpage.

 * [Requirements](#Requirements)

### Installation

1. Install Cypress via npm:
2. cd /your/project/path
3. npm install cypress --save-dev

Install the plugin by running:

```shell
npm install --save-dev cypress-cucumber-preprocessor
```
### Cypress Configuration

Add it to your plugins:

`cypress/plugins/index.js`

```javascript
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```
Add support for feature files to your Cypress configuration

`cypress.json`

```json
{
    "testFiles": "**/*.{feature,features}"
}
```

Used Smart tagging
1. @focus

##Editor Used 
Visual Studio Code 

##Visual code icons 
Install VS code Icons
File > Preferences > File Icon Theme > VSCode Icons.

#Requirements

1. Using the BDD (Given/When/Then) format, write 5 test cases that relate to features of the
SkyNews.com homepage, using a full screen desktop view.
2. Verify the browser tab’s title.
3. Verify the number of categories displayed and their names.
4. Verify the default focus point is on the Home category.
5. Verify that if the user then clicks on ‘Climate’, this becomes the focus.
6. Select a story from the homepage. Verify that a word of your choice in the title text of the
article you have just selected appears once title of the new page loads.





