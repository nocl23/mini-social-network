Template.Invitation.events({
  'click #accept': function(event){
    event.preventDefault();

    Meteor.call('accepterInvitation', this.emetteurId , this.destinataireId, this._id);

  },

  'click #decline':function(event){
    event.preventDefault();

    Meteor.call('declinerInvitation', this._id);
  }
});
