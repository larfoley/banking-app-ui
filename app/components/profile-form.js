import Component from '@ember/component';

export default Component.extend({

  submit(e) {
    e.preventDefault();

    this.onUpdateProfile(this.get('user'));
  }
});
