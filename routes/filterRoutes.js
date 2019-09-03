const express = require("express");
const axios = require("axios");
const fs = require("fs");
const mangas = require("../info/mangas.json");

const router = express.Router();

router.post("/filter", async (req, res) => {
  console.log("asd");
  let { term = "", page = 0, nItems = 20 } = req.body;

  const reg = new RegExp(`(?:${term.toLowerCase()})`);

  let start = new Date().getTime();
  //console.log('start');
  /* try {
    const response = await axios.get('https://www.mangaeden.com/api/list/0/');
    console.log(new Date().getTime() - start);
    const filteredResults = response.data.manga
      .filter(result => reg.test(result.a))
      .sort((a, b) => b.h - a.h)
      .slice(0, 48);
    console.log(new Date().getTime() - start);
    res.status(200).send(filteredResults);
  } catch (err) {
    console.log(err);
  } */

  const filteredResults = mangas.manga
    .filter(result => reg.test(result.t.toLowerCase()))
    .sort((a, b) => b.h - a.h)
    .slice(page * nItems, page * nItems + nItems);

  /* filteredResults.forEach((element, index, array) => {
    axios
      .get(`https://www.mangaeden.com/api/manga/${element.i}`)
      .then(response => {
        const { artist, author, description } = response.data;

        array[index] = {
          ...array[index],
          artist,
          author,
          nChapters: response.data.chapters_len,
          description
        };
      });
    res.status(200).send(filteredResults);
  }); */
  /* let count = 0;
  filteredResults.forEach(async (element, index, arr) => {
    const response = await axios.get(
      `https://www.mangaeden.com/api/manga/${element.i}`
    );

    const { artist, author, description } = response.data;
    console.log(artist);
    arr[index] = {
      ...element,
      artist,
      author,
      nChapters: response.data.chapters_len,
      description
    };

    count++;
    if (count >= 5) {
      res.send(filteredResults);
    }
  }); */
  res.send(filteredResults);
});

module.exports = router;
