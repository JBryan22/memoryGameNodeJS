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
