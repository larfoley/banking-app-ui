import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  email: "",
  password: "",
  isSigningIn: false,

  submit(e) {
    e.preventDefault();

    this.setProperties({
      isSigningIn: true,
      errorMessage: "",
    });

    const { email, password } = this.getProperties('email', 'password');

    this.onSignIn(email, password)
      .catch((reason) => {
        if (reason.status === 400) {
          this.set('errorMessage', "Incorrect email or password");

        } else {
          this.set('errorMessage', "Unable to sign in. Try again later");

        }
      })
      .finally(() => {
        this.set('isSigningIn', false);
      })
  }
});
