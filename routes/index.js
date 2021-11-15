const express = require('express');
const productsRepo = require('../repositories/products');
const pageShopTemplate = require('../views/page/shop');
const pageIndexTemplate = require('../views/page/index');
const pageContactTemplate = require('../views/page/contact');
const pageStatuteTemplate = require('../views/page/statute');
const pageConditionsTemplate = require('../views/page/conditions');
const pageGivebackTemplate = require('../views/page/giveback');
const pageIdTemplate = require('../views/page/id');




const router = express.Router();

router.get('/shop', async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(pageShopTemplate({ products }));
});

router.get('/', async (req, res) => {
   res.send(pageIndexTemplate ({ title: 'Home Page' }));
});

router.get('/contact', async (req, res) => {
   res.send(pageContactTemplate ({ title: 'Contact' }));
});

router.get('/statute', async (req, res) => {
   res.send(pageStatuteTemplate ({ title: 'Statute' }));
});

router.get('/conditions', async (req, res) => {
   res.send(pageConditionsTemplate ({ title: 'Conditions' }));
});

router.get('/giveback', async (req, res) => {
   res.send(pageGivebackTemplate ({ title: 'Giveback' }));
});

router.post('/shop/:id', async (req, res) => {
   const product = await productsRepo.getOne(req.params.id);
   return { product };
   });
router.get('/shop/:id', async (req, res) => {
   const product = await productsRepo.getOne(req.params.id);
 
   if (!product) {
     return res.send('Product not found');
   }
    res.send(pageIdTemplate({ product }));
 });


module.exports = router;
