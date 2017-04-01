Template.monAmi.events({
  'click #remove': function(event){
    event.preventDefault();

    Meteor.call('removeFriend', this._id);
  },

});
