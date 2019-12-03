import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bank-accounts/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bank-accounts/edit');
    assert.ok(route);
  });
});
