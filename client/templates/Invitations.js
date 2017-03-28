Template.Invitations.helpers({
  invits:function(){
    return Invitations.find({destinataireId:Meteor.userId()});
  }
});
