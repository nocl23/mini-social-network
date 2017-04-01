import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import './main.html';
import {Invitations} from './templates/Invitations.js';


Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('mesAmis');
  Meteor.subscribe('mesInvitations');
});

Template.body.helpers({
	users() {
		return Meteor.users.find({amiAvec:{$in:[Meteor.userId()]}},
                              {});                     
	},
  invits(){
    return Invitations.find();
  }
});
