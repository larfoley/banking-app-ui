import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bank-accounts', function() {
    this.route('view');
    this.route('new');
  });
});

export default Router;
