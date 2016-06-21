var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/liker');

var likeButton = new models.Clicker();


$('.buttonbox').on('click', function(event){
  event.preventDefault();
  $('.buttonbox').text(likeButton.counter() + ' like');
});


$("#button1").mousedown(function() {
    $(this).css({'background-image': 'linear-gradient(#ccc , #eee)', 'border': '1px solid #ccc'});
});

$("#button1").mouseup(function() {
    $(this).css({'background-image': 'linear-gradient(#eee , #ccc)', 'border': '1px solid #ccc'});
});
