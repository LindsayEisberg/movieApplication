//Model View for MovieListing
var ListingView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  className: 'col-md-4',
  initialize: function () {
    console.log(this.el);
  },
  events: {
    "click .deletePost": "removeListing"
  },
  render: function() {
    console.log(this.el);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },
  removeListing: function() {
    this.model.destroy();
    this.$el.remove();
  }
});


//Collection View for MovieCollection
var CollectionView = Backbone.View.extend({
  el: $('section'),
  initialize: function() {
    console.log('collection view is initialized');
    this.addAllListings();
  },
  events: {
    'submit #createMovie': 'createListing'
  },
  createListing: function(e) {
    e.preventDefault();
    var newListing = {
      title:$('#createMovie').find('input[name="newTitle"]').val(),
      director:$('#createMovie').find('input[name="newDirector"]').val(),
      synopsis:$('#createMovie').find('textarea[name="newSynopsis"]').val(),
      poster:$('#createMovie').find('input[name="newPoster"]').val()
    };
    var movieListing = new MovieListing(newListing);
    movieListing.save();
    this.addAllListings();
    $('input').val('');
    $('textarea').val('');

  },

  addOneListing: function(movie) {
    var listingView = new ListingView({model: movie});
    this.$el.append(listingView.render().el);
  },

  addAllListings: function() {
    _.each(this.collection.models, this.addOneListing, this)
  }
});
