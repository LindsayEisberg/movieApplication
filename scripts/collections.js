//Movie Collection

var MovieCollection = Backbone.Collection.extend({
  url: "http://tiy-fee-rest.herokuapp.com/collections/lindsayeisbergbackboneHW2",
  model: MovieListing
});
