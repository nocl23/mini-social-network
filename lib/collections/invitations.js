import { Mongo } from 'meteor/mongo';
Invitations = new Mongo.Collection('invitations');

Meteor.methods({
  'envoyerInvitation'(nom){
    console.log(nom);
  }
})
