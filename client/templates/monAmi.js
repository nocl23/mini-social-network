Template.monAmi.events({
  'click #remove': function(event){
    event.preventDefault();
    Modal.show("exampleModal",this);
    var friend = this;

    document.getElementById("remove_yes").onclick = function(){
      Meteor.call('removeFriend', friend._id , Meteor.userId());
      Modal.hide();

    };

  },

});
