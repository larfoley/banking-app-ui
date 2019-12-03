import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

const { host, namespace } = ENV.APP;

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${host}/${namespace}/users/token`,
  sendClientIdAsQueryParam: true,
  rejectWithResponse: true,
});
