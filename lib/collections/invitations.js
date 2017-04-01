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
    if(id_emetteur != user._id){
    //Invitations.insert(user);
      var invitations_insert = Invitations.insert({
          emetteurId: id_emetteur,
          emetteurNom: nom_emetteur,
          destinataireId: user._id,
        });
    }else{
      console.log("Tu ne peux pas t'ajouter en ami");
    }
  }
  else{
    console.log(nom + ' n\'est pas enregistré !');
  }
},

  'accepterInvitation'(emetteurId,destinataireId,invitation_id){
    Meteor.users.update({_id:emetteurId},{$push:{amiAvec:destinataireId}});
    Meteor.users.update({_id:destinataireId},{$push:{amiAvec:emetteurId}});
    Invitations.remove({_id:invitation_id});
    console.log("Invitation acceptée!");
  },

  'declinerInvitation'(invitation_id){
    Invitations.remove({_id:invitation_id});
    console.log("Invitation déclinée!");
  }

});
