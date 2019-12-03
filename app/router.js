import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bank-accounts', function() {
    this.route('view', { path: '/:id/view' }, function() {
      this.route('transactions');
      this.route('transfer-funds');
      this.route('withdraw-funds');
      this.route('lodge-funds');
    });
    this.route('new');
    this.route('edit', { path: '/:id/edit' });
  });
  this.route('sign-in');
  this.route('sign-up');
  this.route('404');
  this.route('profile');

  this.route('admin', function() {
    this.route('account-types', function() {
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
    this.route('users', function() {
      this.route('new');
      this.route('view', { path: '/:id/view'});
      this.route('edit', { path: '/:id/edit' });
    });
    this.route('branches', function() {
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
  });
});

export default Router;
