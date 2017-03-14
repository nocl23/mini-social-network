import { Mongo } from 'meteor/mongo';
Invitations = new Mongo.Collection('invitations');

Meteor.methods({
  'envoyerInvitation'(nom){

    if(!Meteor.user()){
      console.log("personne n'est connecté");
    }
    else{
      var nom_emetteur = Meteor.user().username;
      var id_emetteur = Meteor.userId();
      console.log(nom_emetteur+ " est enregistré en BDD");
    }

    if(Meteor.users.findOne({username:nom})){
      var user = Meteor.users.findOne({username:nom});

      //Invitations.insert(user);
      Invitations.insert({
          emetteurId: id_emetteur,
          emetteurNom: nom_emetteur,
          destinataireId: user._id,
        });

    }
    else{
      console.log(nom + ' n\'est pas enregistré !');
    }
  }
});
