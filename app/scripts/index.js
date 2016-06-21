var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/liker');

var likeButton = new models.Clicker();
// console.log(likeButton.get('title'));
// console.log(likeButton.get('number'));

$('.buttonbox').on('click', function(event){
  event.preventDefault();
  $('.buttonbox').text(likeButton.counter());
});

$("#button1").mousedown(function() {
    $(this).css({'background-image': 'linear-gradient(#ccc , #eee)'});
});

$("#button1").mouseup(function() {
    $(this).css({'background-image': 'linear-gradient(#eee , #ccc)'});
});
