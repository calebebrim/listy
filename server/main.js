import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  import '../imports/api/items.js';
  // code to run on server at startup
});


ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '343619416082919',
    secret: 'c2e320a35ce9e3a28bd855675ac1e850'
});


Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});
