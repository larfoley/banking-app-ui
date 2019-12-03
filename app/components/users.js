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
      const toast = this.get('toast');
      
      this.onDeleteUser(id)
        .then(() => {
          toast.success('User deleted')
        })
        .catch((e) => {
          console.log(e);
          toast.error('Unable to delete user')
        })
    }
  }
});
