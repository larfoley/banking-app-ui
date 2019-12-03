import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  balance() {
    return faker.finance.amount(1000, 10000);
  },

  accountNumber() {
    return faker.random.number({min: 10000000, max: 99999999})
  },

  sortCode() {
    return faker.random.number({min: 100000, max: 999999});
  },

  accountType(i) {
    return {
      id: i + 1,
      name: "Standard"
    }
  },

  iban() {
    const checkSum = faker.random.number({min: 10, max: 20});
    const sortCode = faker.random.number({min: 100000, max: 999999});
    const accountNumber = faker.random.number({min: 10000000, max: 99999999});

    return `IE${checkSum}NCIB${sortCode}${accountNumber}`;
  },

  bic() {
    return 'IPBSIE2D';
  }
});


// BIC / Swift CODE
//===============================
// NCIB IE D5 11
// this will alway be the same

// IBAN
// ==================================
// < Country code > < 2 digit check sum > < bank identifier > <Sort code > <account number>
// Only thing that changes in the iban will be the account number
// example IBAN: IE 55 NCIB 123456 1000001

// Sort Code
// example: 123456
// Sort code will always be the same. Some banks use the last 2 digits
// to identify branch so if you want to do that you can. If you do then
// the iban will have to be updated aswell seen as that uses sort code
