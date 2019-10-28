import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | bank-accounts/new', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:bank-accounts/new');
    assert.ok(controller);
  });
});
