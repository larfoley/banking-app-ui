import { inject as service } from '@ember/service';
import ProtectedRoute from './protected-route';

export default ProtectedRoute.extend({
  currentUser: service(),

   model() {
      return this.get('currentUser.user');
   }
});
