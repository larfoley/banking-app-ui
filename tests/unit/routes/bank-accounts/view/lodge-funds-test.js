import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bank-accounts/view/lodge-funds', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bank-accounts/view/lodge-funds');
    assert.ok(route);
  });
});
