$(function() {

  function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  function Column(name){
    var self = this; // przyda się dla funkcji zagnieżdżonych

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    // createColumn - poczatek
    function createColumn() {
    	// tutaj kod do tworzenia kolumny, który znajdziesz niżej
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

      $columnDelete.click(function() {
        self.removeColumn();
      });

      //Dodawanie karteczki po kliknięciu w przycisk:
      $columnAddCard.click(function() {
              self.addCard(new card(prompt("Wpisz nazwę karty")));
      });

      $column.append($columnTitle)
        .append($columnDelete)
        .append($columnAddCard)
        .append($columnCardList);
      return $column;

      $card.append($cardDelete)
        .append($cardDescription);
      return $card;
    } //koniec createColumn
  } //koniec Column

  Column.prototype = {
      addCard: function(card) {
        this.$element.children('ul').append(card.$element);
      },
      removeColumn: function() {
        this.$element.remove();
      }
  }; // koniec Column.prototype


  function addCard(){
        this.$element.children('ul').append(card.$element);
  }

  function card(description) {   // Card zmieniłem na card
      var self = this;
      this.id = randomString();
      this.description = description;
      this.$element = createCard(); //

      function createCard() {
      // TWORZENIE KLOCKÓW
        var $card = $('<li>').addClass('card');
        var $cardDescription = $('<p>').addClass('card-description').text(self.description);
        var $cardDelete = $('<button>').addClass('btn-delete').text('x');

        // PRZYPIĘCIE ZDARZENIA
        $cardDelete.click(function(){
          self.removeCard();
        });

        // SKŁADANIE I ZWRACANIE KARTY
        $card.append($cardDelete)
            .append($cardDescription);
            return $card;
     } // koniec createCard

        
    }  // koniec Card

//  metoda dla klasy Card
        card.prototype = {                 // zmieniłe Card. na card.
            removeCard: function() {
              this.$element.remove();
            }
          }

var board = {
    name: 'Tablica Kanban',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
};

$('#board .column-container');

function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }

  $('.column-card-list');

  $('.column-card-list').sortable();

  $('.create-column').click(function(){
	var name = prompt('Wpisz nazwę kolumny');
	var column = new Column(name);
    	board.addColumn(column);
  });

// TWORZENIE KOLUMN
var todoColumn = new Column('Do zrobienia');
var doingColumn = new Column('W trakcie');
var doneColumn = new Column('Skończone');

// DODAWANIE KOLUMN DO TABLICY
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
var card1 = new card('Nowe zadanie');
var card2 = new card('Stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
todoColumn.addCard(card1);
doingColumn.addCard(card2);

//koniec  
});
