const { Router } = require('express');
const { Videogame, Genre, Genre_Videogame } = require('../db.js');
const axios = require('axios');
const { API_KEY, API_URL } = process.env;
const { fn, col, where, Op } = require('sequelize');

const router = Router();

router.get('/', async (req, res) => {
  try {
    let url = `${API_URL}/games?key=${API_KEY}&page_size=15`;

    const searchTerm = req.query.name?.toLowerCase();

    if (req.query.name) {
      url = `${url}&search=${searchTerm}`
    }

    const response = await axios.get(url);
    const gamesFromApi = response.data.results;
    const gamesFromDb = !searchTerm
      ? await Videogame.findAll()
      : await Videogame.findAll({ where: where(fn('lower', col('videogame.name')), { [Op.like]: `%${searchTerm}%` }), include: Genre });

    const result = [
      ...gamesFromApi.map(x => ({
        id: x.id,
        uuid: null,
        name: x.name,
        description: x.description,
        image: x.background_image,
        releaseDate: x.released,
        rating: x.rating,
        genres: x.genres.map(g => ({
          id: g.id,
          name: g.name
        }))
      })),
      ...gamesFromDb.map(x => ({
        id: x.id,
        uuid: x.uuid,
        name: x.name,
        description: x.description,
        image: x.image,
        releaseDate: x.releaseDate,
        rating: Number(x.rating)
      }))
    ];

    res.json(result.slice(0, 15));
  } catch (e) {
    console.log(e);
    res.send(e);
  }
})

router.get('/:videogameId', async (req, res) => {
  try {
    const id = req.params.videogameId;
    const isNumberId = !isNaN(Number(id));

    if (isNumberId) {
      const response = await axios.get(`${API_URL}/games/${req.params.videogameId}?key=${API_KEY}`);
      res.json({
        id: response.id,
        uuid: response.uuid,
        name: response.name,
        description: response.description,
        image: response.background_image,
        releaseDate: response.released,
        rating: response.rating,
        genres: response.genres.map(g => ({
          id: g.id,
          name: g.name
        }))
      });
    } else {
      const game = await Videogame.findOne({ where: { uuid: id }, include: Genre });
      res.json({
        id: game.id,
        uuid: game.uuid,
        name: game.name,
        description: game.description,
        image: game.image,
        releaseDate: game.releaseDate,
        rating: Number(game.rating),
        genres: game.genres.map(g => ({
          id: g.id,
          name: g.name
        }))
      });
    }

  } catch (e) {
    console.log(e);
    res.send(e);
  }
})

router.post('/', async (req, res) => {
  const {
    name,
    description,
    rating,
    releaseDate,
    image,
    genresIds
  } = req.body;


  try {
    const newVideoGame = await Videogame.create({
      name,
      description,
      rating: Number(rating),
      releaseDate,
      image
    })

    await Genre_Videogame.bulkCreate(genresIds.map(genreId => ({ genreId, videogameId: newVideoGame.id })));
  
    res.json(newVideoGame);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

module.exports = router;