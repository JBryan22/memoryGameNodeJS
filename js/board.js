var Pokemon = require("./../js/pokemon.js").pokemonModule;

function Board() {
  this.turns = 0;
  this.hasWon = false;
  this.boardPlacement = [];
  this.click = false;
  this.guesses = [];

  this.initializeBoard = function() {
    this.boardPlacement = [];
    this.boardPlacement.push(pikachuOne = new Pokemon("pikachu"));
    this.boardPlacement.push(pikachuTwo = new Pokemon("pikachu"));

    this.boardPlacement.push(squirtleOne = new Pokemon("squirtle"));
    this.boardPlacement.push(squirtleTwo = new Pokemon("squirtle"));

    this.boardPlacement.push(charmanderOne = new Pokemon('charmander'));
    this.boardPlacement.push(charmanderTwo = new Pokemon('charmander'));

    this.boardPlacement.push(bulbasaurOne = new Pokemon('bulbasaur'));
    this.boardPlacement.push(bulbasaurTwo = new Pokemon('bulbasaur'));

    this.boardPlacement.push(jigglypuffOne = new Pokemon('jigglypuff'));
    this.boardPlacement.push(jigglypuffTwo = new Pokemon('jigglypuff'));

    var currentIndex = this.boardPlacement.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.boardPlacement[currentIndex];
      this.boardPlacement[currentIndex] = this.boardPlacement[randomIndex];
      this.boardPlacement[randomIndex] = temporaryValue;
    }
  };

  this.checkSame = function() {
    if (this.guesses[0].type === this.guesses[1].type) {
      this.guesses[0].matched = true;
      this.guesses[1].matched = true;
      console.log(this.guesses[0].matched);
    }
  };

  this.checkWin = function() {
          var win = true;
    this.boardPlacement.forEach(function(pokemon){

      if (pokemon.matched === false)
      {
        win = false;
      }
    });
    return win;
  }
}

exports.boardModule = Board;
