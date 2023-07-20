const router = require('express').Router();
const axios = require('axios');
router.get('/', async (req, res,next) => {
  const response = await axios.get('https://coderbyte.com/api/challenges/json/age-counting')
  const data = response.data;
  //get how many items exist that have an age equal to 32
  const items = data.data.split(', ');
  // console.log(items);
  const groupedItems = [];
  for (let i = 0; i < items.length; i++) {
    groupedItems[i] = [items[i], items[i++ + 1]]; 
    
  }
  console.log(cleanItems);
  return res.send(groupedItems);
}); 

module.exports = router;