var Backbone = require('backbone');

var Clicker = Backbone.Model.extend({
  defaults: {
    'number': 0,
  },

  initialize: function(){
    console.log("Create A Like");
  },

  counter: function(){
    var activeNumber = this.get('number') + 1;
    this.set('number', activeNumber);
    return activeNumber;
  },
});

console.log((new Clicker()).toJSON());

module.exports = {
  'Clicker': Clicker
};
