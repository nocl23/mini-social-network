import { Mongo } from 'meteor/mongo';


Meteor.methods({

  'removeFriend'(friend_id,userId){
      Meteor.users.update({_id:friend_id},{$pull:{amiAvec:userId}});
      Meteor.users.update({_id:userId},{$pull:{amiAvec:friend_id}});
      console.log(friend_id + " "+userId+" Ami supprimé !");


  },

});
