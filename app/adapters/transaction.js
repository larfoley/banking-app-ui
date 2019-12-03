import ApplicationAdapter from './application';
import ENV from '../config/environment';

const { host, namespace } = ENV.APP;

export default ApplicationAdapter.extend({
  urlForCreateRecord() {
    return `${host}/${namespace}/transactions/transfer`;
  }
});
