import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      accountTypes: this.store.findAll('accountType'),
      branches: this.store.findAll('branch'),
    })
  }
});
