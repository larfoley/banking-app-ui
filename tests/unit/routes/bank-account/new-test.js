import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bank-account/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bank-account/new');
    assert.ok(route);
  });
});
