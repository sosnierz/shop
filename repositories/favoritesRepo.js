const Repository = require('./repository');

class FavoritesRepository extends Repository {}

module.exports = new FavoritesRepository('favoritesRepo.json');