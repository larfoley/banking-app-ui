import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  balance() {
    return faker.finance.amount(1000, 10000);
  },

  accountType() {
    return "Standard";
  },

  iban() {
    return faker.random.uuid()
  },

  name(i) {
    return this.accountType + " A/C" + (i + 1 * 100);
  }
});
