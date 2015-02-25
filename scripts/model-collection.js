//Movie Listing
var MovieListing = Backbone.Model.extend({
  urlRoot:"http://tiy-fee-rest.herokuapp.com/collections/lindsayeisbergbackboneHW2",
  idAttribute: "_id",
  defaults: function() {
    return {
      poster: 'http://fillmurray.com/300/300'
    };
  },
  initialize: function() {
    console.log('model was created');
  }
});


var MovieCollection = Backbone.Collection.extend({
  url: "http://tiy-fee-rest.herokuapp.com/collections/lindsayeisbergbackboneHW2",
  model: MovieListing
});
