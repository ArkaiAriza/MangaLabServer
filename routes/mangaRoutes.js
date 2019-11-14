const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/api/manga', async (req, res) => {
  let { id = '' } = req.body;
  //console.log(id);
  try {
    const response = await axios.get(
      `https://www.mangaeden.com/api/manga/${id}`
    );
    res.send(response.data);
  } catch (err) {
    //console.log(err);
    res.status(500);
  }
});

module.exports = router;
