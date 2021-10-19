const express = require('express');
const multer = require('multer');
const { handleErrors, requireAuth } = require('./middlewares');
const productsRepo = require('../../repositories/products');
const favoritesTemplate = require('../../views/products/favorites');


const router = express.Router();


router.post('/admin/products/favorites', async (req, res) => {
  // Figure out the cart!
  let cart;
  if (!req.session.cartId) {
    // We dont have a cart, we need to create one,
    // and store the cart id on the req.session.cartId
    // property
    cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    // We have a cart! Lets get it from the repository
    cart = await cartsRepo.getOne(req.session.cartId);
  }

  const existingItem = cart.items.find(item => item.id === req.body.productId);
  if (existingItem) {
    // increment quantity and save cart
    existingItem.quantity++;
  } else {
    // add new product id to items array
    cart.items.push({ id: req.body.productId, quantity: 1 });
  }
  await cartsRepo.update(cart.id, {
    items: cart.items
  });

  res.redirect('/cart');
});




router.get('/admin/products/favorites', requireAuth, async (req, res) => {
  const favorites = await productsRepo.getAll();
  res.send(productsIndexTemplate({ products }));
});


  




module.exports = router;
