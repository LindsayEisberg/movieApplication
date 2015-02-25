describe("Movie Listing", function (){
  beforeEach(function (){
    this.movieListing = new MovieListing();
    //this.movieStub = sinon.stub(this.movieListing, 'save');
  });
  it("should be an instance of Movie Listing Class", function(){
    expect(this.movieListing).is.instanceof(MovieListing);
  });
  it("should have correct url root", function(){
    expect(this.movieListing.urlRoot).to.be.ok;
    expect(this.movieListing.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/lindsayeisbergbackboneHW2");
  });
  it("should be able to add property to model", function(){
    expect(this.movieListing.attributes.title).to.not.be.ok;
    this.movieListing.set({title: "Harry Potter"});
    expect(this.movieListing.attributes.title).to.equal("Harry Potter");
  });
  it('should have a default photo', function(){
    expect(this.movieListing.attributes.poster).to.equal('http://fillmurray.com/300/300');
  });
});

describe("Movie Collection", function(){
  beforeEach(function (){
    this.movieCollection = new MovieCollection();
  });
  it('should have an instance of a Movie Collection class', function(){
    expect(this.movieCollection).is.instanceof(MovieCollection);
  });
  it('should have a Movie Listing model', function(){
    expect(this.movieCollection.model).to.equal(MovieListing);
  });
  it('should have a correct url', function(){
    expect(this.movieCollection.url).to.be.ok;
    expect(this.movieCollection.url).to.be.equal('http://tiy-fee-rest.herokuapp.com/collections/lindsayeisbergbackboneHW2');
  });
});
