import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    getProfile() {
      this.store.queryRecord('profile', {}).then((profile) => {
        this.set('username', profile.get('username'))
      });
    },
    login () {
      this.get('session').authenticate('authenticator:oauth2', "letme", "in")
        .catch((error) => {
          console.log(error);
        });
    },

    logout () {
      this.get('session').invalidate();
    }
  }
});
