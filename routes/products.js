const express = require('express');
const productsRepo = require('../repositories/products');
const favoritesRepo = require('../repositories/favoritesRepo');
const productsIndexTemplate = require('../views/products/index');
const favoritesIndexTemplate = require('../views/products/favorites');

const router = express.Router();

router.get('/', async (req, res) => {
  const productsFavorite = await favoritesRepo.getAll();
  res.send(favoritesIndexTemplate({ productsFavorite }));
});

router.get('/shop', async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(productsIndexTemplate({ products }));
});

module.exports = router;
