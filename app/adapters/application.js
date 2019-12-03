import RESTAdapter from '@ember-data/adapter/rest';
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { computed } from '@ember/object';
import ENV from '../config/environment';

const { host, namespace } = ENV.APP;

export default RESTAdapter.extend(DataAdapterMixin, {
  host,
  namespace,

  headers: computed('session.data.authenticated.token', function() {
    const headers = {};

    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.access_token}`;
    }

    return headers;
  })
});
