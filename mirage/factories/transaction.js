import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  amount() {
    return faker.finance.amount(10, 1000);
  },

  postBalance() {
    return faker.finance.amount(1000, 4000);
  },

  description() {
    return "POS " + faker.company.companyName()
  },

  credit() {
    return "--"
  },

  debit() {
    return 13;
  },

  date() {
    return faker.date.past().toLocaleDateString();
  }
});
