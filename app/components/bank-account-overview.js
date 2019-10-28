import Component from '@ember/component';

export default Component.extend({
  classNames: ["bank-account-overview"],

  actions: {
    closeDropDown(dropdown) {
      dropdown.actions.close();
    }
  }
});
