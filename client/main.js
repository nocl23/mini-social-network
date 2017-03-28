import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import './main.html';



Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('mesInvitations');
});

Template.body.helpers({
	users() {
		return Meteor.users.find();
	},
});
