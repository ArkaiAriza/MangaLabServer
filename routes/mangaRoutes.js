const express = require("express");
const router = express.Router();

router.post("/manga", async (req, res) => {
  let { id = "" } = req.body;
  console.log(id);
  try {
    const response = await axios.get(
      `https://www.mangaeden.com/api/manga/${id}`
    );
    console.log(response);
    res.send(response);
  } catch (err) {
    console.log("sorry");
    res.status(500);
  }
});

module.exports = router;
