const axios = require('axios');
const fs = require('fs');

const { generateSHA1Hash, createFinalString }= require('../services/challengeService');

const challengeController = async (req, res) => {
  const response = await axios.get('https://coderbyte.com/api/challenges/json/age-counting')
  const data = response.data.data;
  const keyAgeRegex = /(key=(?<key>\w+), age=(?<age>32))/
  const globalRegex = new RegExp(keyAgeRegex,'g');
  const individualRegex = new RegExp(keyAgeRegex)
  try {
    const items = data.match(globalRegex);
    const finalString = createFinalString(items,individualRegex);
  
    const SHA1Hash = generateSHA1Hash(finalString);
  
    fs.writeFileSync('output.txt', SHA1Hash)
    
    const itemCount = items.length;
    return res.status(201).send('File has been created');
  } catch (error) {
    return res.status(500).send(error.message);
  }

}

module.exports = challengeController;