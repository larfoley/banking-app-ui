import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bank-accounts', function() {
    this.route('view', { path: '/:id' }, function() {
      this.route('transactions');
      this.route('transfer-funds');
      this.route('withdraw-funds');
      this.route('lodge-funds');
    });
    this.route('new');
  });
  this.route('404');
  this.route('sign-in');
  this.route('sign-up');
});

export default Router;
