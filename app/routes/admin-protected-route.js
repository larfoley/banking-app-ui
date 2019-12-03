import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  authenticationRoute: 'sign-in',
  currentUser: service(),

  beforeModel() {
    this._super(...arguments);
    if (!this.get('currentUser.isAdmin')) {
      this.transitionTo('bank-accounts')
    }
  }
});
