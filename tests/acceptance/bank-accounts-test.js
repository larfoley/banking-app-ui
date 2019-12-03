import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | bank accounts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /bank-accounts', async function(assert) {
    await visit('/bank-accounts');

    await click('button');

    await this.pauseTest();

    assert.equal(currentURL(), '/bank-accounts');
  });
});
