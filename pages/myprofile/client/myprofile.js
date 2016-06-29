Template.myprofile.helpers({
  myprofile: function(){
    const p = UserProfiles.findOne({userId:Meteor.userId()});
    //console.log("userid="+Meteor.userId());
    //console.log("p="+p);
    if (p) return p;
    else return {};
  }
});


Template.myprofile.events({
  'click .js-submit-profile': function(event){
    const firstname = $('.js-firstname').val();
    const lastname = $('.js-lastname').val();
    const nickname = $('.js-nickname').val();
    const email = $('.js-email').val();
    const birthyear = $('.js-birthyear').val();
    const profile = {firstname,lastname,nickname,email,birthyear};
    console.dir(profile);
    Meteor.call("addProfile",profile);
    Router.go("profiles");
  }
})
