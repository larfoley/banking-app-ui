import ENV from '../config/environment';

export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = ENV.APP.host    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = ENV.APP.namespace;    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  this.resource('bankAccounts');
  this.resource('transactions');
  this.resource('account-types');
  this.resource('branch');
  this.resource('accountType');

  this.post('/users');

  this.get('/users/me', () => {
    return {
      user: {
        id: 1,
        email: "sdfd"
      }
    }
  })

  this.post('/users/token', () => {
    return {
      access_token: "123"
    }
  })
}
