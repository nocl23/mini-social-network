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
      var invitations_insert = Invitations.insert({
          emetteurId: id_emetteur,
          emetteurNom: nom_emetteur,
          destinataireId: user._id,
        });

        if(invitations_insert){
          console.log("invitation envoyée en BDD! pour l'utilisateur"+ user._id);
        }

    }
    else{
      console.log(nom + ' n\'est pas enregistré !');
    }
  },

  'accepterInvitation'(emetteurId,destinataireId){
    Meteor.users.update({_id:emetteurId},{$push:{amiAvec:destinataireId}});
    Meteor.users.update({_id:destinataireId},{$push:{amiAvec:emetteurId}});

  }

});
