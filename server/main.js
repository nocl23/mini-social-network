import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('mesAmis',function(){
  if(!this.userId){
    return this.ready();
  }else{
      return Meteor.users.find({_id:this.userId},{fields:{username:1,amiAvec:1,_id:1}});
      //return Meteor.users.find().count();
    }
});

Meteor.publish('mesInvitations',function(){
  if(!this.userId){
    return this.ready();
  }else{
      return Invitations.find({destinataireId:this.userId},{});

    }
});
