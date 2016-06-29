Meteor.methods({
  "addProfile": function(profile){
    const userId = Meteor.userId();
    UserProfiles.remove({userId:userId});
    profile.userId = userId;
    UserProfiles.insert(profile);
  }
})
