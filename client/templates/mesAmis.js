Template.mesAmis.helpers({
  amis:function(){
    return Meteor.users.find();
  }
});
