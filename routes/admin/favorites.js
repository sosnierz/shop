const express = require('express');
const favoritesRepo = require('../../repositories/favoritesRepo');
const productsRepo = require('../../repositories/products');
const favoritesTemplate = require('../../views/products/favorites');


const router = express.Router();


router.post('/admin/products/favorites', async (req, res) => {
  // Figure out the cart!
  let favorites;
  if (!req.session.favoriteId) {
    
    favorites= await cartsRepo.create({ fItems: [] });
    req.session.favoriteId = favorites.id;
  } else {
   
    favorites = await favoritesRepo.getOne(req.session.favoriteId);
  }

  const existingFavorites = favorites.fItems.find(fItem => fItem.id === req.body.productId);
  if (existingFavorites) {
    // increment quantity and save cart
    return res.send('Produkt już został dodany');
  } else {
    
    favorites.fItems.push({ id: req.body.productId });
  }
  await favoritesRepo.update(favorites.id, {
    items: favorites.items
  });

  res.redirect('/admin/products/favorites');
});


router.get('/admin/products/favorites', async (req, res) => {
if (!req.session.favoriteId) {
  return res.redirect('/admin/products');
}
const favorites = await favoritesRepo.getOne(req.session.favoriteId);

for (let fItem of favorites.fItems) {
  const product = await productsRepo.getOne(fItem.id);
  fItem.product = product;
}

res.send(favoritesTemplate({fItems: favorites.fItems }));
});
// Receive a post request to delete an item from a cart

router.post('/admin/products/favorites/delete', async (req, res) => {
  const { fItemId } = req.body;
  const favorites = await favoritesRepo.getOne(req.session.favoriteId);
 
  const fItems = favorites.fItems.filter((fItem) => fItem.id !== fItemId);
 
  await favoritesRepo.update(req.session.favoriteId, { fItems });
 
  res.redirect('/admin/products/favorites');
});
module.exports = router;
