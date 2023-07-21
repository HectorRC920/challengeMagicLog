const axios = require('axios');
const { writeFile } = require('fs/promises');

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
  
    await writeFile('output.txt', SHA1Hash)
    
    const itemCount = items.length;
    return res.status(201).send(`File has been created and age=32 is repeated ${itemCount} times`);
  } catch (error) {
    return res.status(500).send(error.message);
  }

}

module.exports = challengeController;