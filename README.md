
:wave: Welcome to the SkyNews webPage Automated Scripts using Bdd Framework 

# OverView 
![](https://img.shields.io/badge/cypress-informational?style=flat&logo=cypress&logoColor=white&color=2bbc8a)

- This repo contains an test scripts  written in Cypress using Bdd Framework.

- The tests are written to be directly compared to the  SkyNews Webpage.

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

