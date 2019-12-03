import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate(email, password) {
      return this.get('session').authenticate('authenticator:oauth2', email, password);
    }
  }
});
