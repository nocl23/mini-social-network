Template.formulaireInvitations.events({
  'submit #formulaireInvitations': function(event){
    event.preventDefault();
    var nom = event.target.nom.value;
    Meteor.call('envoyerInvitation', nom);
  }
});
