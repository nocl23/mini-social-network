import { Meteor } from 'meteor/meteor';
//Invitations = new Mongo.Collection('invitations');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('mesInvitations',function(){
  if(!this.userId){
    return this.ready();
  }else{
      return Meteor.users.find({_id:this.userId},{fields:{username:1,amiAvec:1,_id:1}});
      //return Meteor.users.find().count();
    }
});
