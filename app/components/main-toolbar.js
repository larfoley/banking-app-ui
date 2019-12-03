import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  session: service(),
  currentUser: service(),
  classNames: ["main-toolbar"],

  username: computed('currentUser', function() {
    return this.get('currentUser.user.email');
  }),

  isAdmin: computed('property', function() {
    return this.get('currentUser.user.role') == "admin";
  }),

  actions: {
    closeDropDown(dropdown) {
      dropdown.actions.close();
    },

    logout() {
      this.get('session').invalidate()
    }
  }
});
