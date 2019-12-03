import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  toast: service(),

  columnsForRowsWithComponents: computed(function() {
    return [
    { name: 'Account Type', valuePath: 'name' },
    { name: 'Actions', valuePath: 'id' },
  ];
  }),

  rowsWithComponents: computed('accountTypes.[]', function() {
    return this.get('accountTypes').toArray();
  }),

  actions: {
    deleteAccountTypes(id) {
      const toast = this.get('toast');

      this.onDeleteAccountTypes(id)
        .then(() => {
          toast.success('Account type deleted')
        })
        .catch(() => {
          toast.error('Unable to delete account type')
        })
    }
  }
});
