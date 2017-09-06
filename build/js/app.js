(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/pokemon.js":2}],2:[function(require,module,exports){
function Pokemon(type) {
  this.type = type;
  this.flipped = false;
  this.matched = false;
}

Pokemon.prototype.checkSame = function (otherPokemon) {
  return this.type === otherPokemon.type;
};

exports.pokemonModule = Pokemon;

},{}],3:[function(require,module,exports){
var Board = require('./../js/board.js').boardModule;
var newGame = new Board();

$(function(){

  newGame.initializeBoard();

  $('.board-spot').click(function(){
    var place = $(this).attr('value');
    $(this).hide();
    $(this).siblings().append("<img src='img/" + newGame.boardPlacement[place].type + ".png'>");
    newGame.guesses.push(newGame.boardPlacement[place]);

    newGame.click = !(newGame.click);
    if (!newGame.click) {
      newGame.checkSame();
      console.log(newGame.checkWin());
      if (newGame.checkWin()) {
        if (confirm("Congratulation! You Win! Do you want to play again?")) {
          newGame.initializeBoard();
          newGame.click = false;
        }
      }

      newGame.guesses = [];

      $('.board-spot').each(function() {
        var checker = $(this).attr('value');
        if (newGame.boardPlacement[checker].matched == false) {
          var newThis = this;
          setTimeout(function(){
            $(newThis).siblings().text('');
            $(newThis).show();
            newGame.clicked = false;
          }, 700)

        }
      });
    }
  });
});

},{"./../js/board.js":1}]},{},[3]);
