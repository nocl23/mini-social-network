Template.Invitation.events({
  'click #accept': function(event){
    event.preventDefault();
    Meteor.call('accepterInvitation', this._id);
    //console.log(this._id);
  }
});
