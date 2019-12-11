import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  toast: service(),
  columns: computed(function() {
    return [
      {
        name: `Name`,
        valuePath: `fullName`
      },
      {
        name: `Email`,
        valuePath: `email`
      },
      {
        name: `Address`,
        valuePath: `address`
      }
    ];
  }),

  rows: computed('users.[]', function() {
    return this.get('users').toArray();
  }),

  columnsForRowsWithComponents: computed(function() {
    return [
      {
        name: `Name`,
        valuePath: `fullName`
      },
      {
        name: `Email`,
        valuePath: `email`
      },
      {
        name: `Address`,
        valuePath: `address`
      },
      { name: 'Actions', valuePath: 'id' },
    ];
  }),

  rowsWithComponents: computed('users.[]', function() {
    return this.get('users').toArray();
  }),

  actions: {
    deleteUser(id) {
      this.onDeleteUser(id)
    }
  }
});
