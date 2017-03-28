import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import './main.html';
import {Invitations} from './templates/Invitations.js'
//export const Invitations = new Mongo.Collection('invitations');



Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('mesAmis');
  Meteor.subscribe('mesInvitations');
});

Template.body.helpers({
	users() {
		return Meteor.users.find();
	},
  invits(){
    return Invitations.find();
  },
});
