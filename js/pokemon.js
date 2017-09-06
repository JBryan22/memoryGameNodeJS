function Pokemon(type) {
  this.type = type;
  this.flipped = false;
  this.matched = false;
}

Pokemon.prototype.checkSame = function (otherPokemon) {
  return this.type === otherPokemon.type;
};

exports.pokemonModule = Pokemon;
