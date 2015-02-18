//Model View for MovieListing
var ListingView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  className: 'col-md-4',
  initialize: function () {
    console.log(this.el);
  },
  events: {
    "click #deletePost": "removeListing",
    'click #editPost': 'showEdit',
    'click #submitEdit': 'editListing'
  },

  showEdit: function() {
    this.$el.find('#editPost').hide();
    this.$el.find('#submitEdit').addClass('show');
    this.$el.find('#updatePost').addClass('show');
    this.$el.find('.content').hide();
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },
  removeListing: function() {
    this.model.destroy();
    this.$el.remove();
  },
  editListing: function(e) {
    e.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="editTitle"]').val(),
      director: this.$el.find('input[name="editDirector"]').val(),
      synopsis: this.$el.find('textarea[name="editSynopsis"]').val(),
      poster: this.$el.find('input[name="editPoster"]').val()
    })

    this.model.save();


    $('.content').show();
    $('#editPost').show();
    $('#updatePost').removeClass('show');
    $('#submitEdit').removeClass('show');
    console.log('submit edit button clicked');

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
    'submit #createMovie': 'createListing',
    'click #submitEdit': 'editCollection'
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
    console.log(this.collection.length);
    this.collection.add(movieListing);
    console.log(this.collection.length);
    this.addAllListings();
    $('input').val('');
    $('textarea').val('');

  },

  editCollection: function() {
    this.$el.find('article').remove();
    this.addAllListings();
    console.log('collection back');
  },

  addOneListing: function(movie) {
    var listingView = new ListingView({model: movie});
    this.$el.append(listingView.render().el);
  },

  addAllListings: function() {
    _.each(this.collection.models, this.addOneListing, this)
  }
});
