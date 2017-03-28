Template.Invitation.events({
  'click #accept': function(event){
    event.preventDefault();

    Meteor.call('accepterInvitation', this.emetteurId , this.destinataireId);

    //console.log(this.emetteurId +" "+ this.destinataireId);
  }
});
