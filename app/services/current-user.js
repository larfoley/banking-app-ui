import Service from '@ember/service';
import { resolve } from 'rsvp';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  session: service(),
  store: service(),

  isAdmin: computed('user', function() {
    return this.get('user.role') == "admin";
  }),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true }).then((user) => {
        this.set('user', user);
      });
    } else {
      return resolve();
    }
  }
});
