import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('mesAmis',function(){
  if(!this.userId){
    return this.ready();
  }else{
      return Meteor.users.find({amiAvec:{$in:[this.userId]}},
                                {});
    }
});

Meteor.publish('mesInvitations',function(){
  if(!this.userId){
    return this.ready();
  }else{
      return Invitations.find({destinataireId:this.userId},{});

    }
});
