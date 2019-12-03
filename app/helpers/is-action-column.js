import { helper } from '@ember/component/helper';

export default helper(function isActionColumn(params/*, hash*/) {
  return params.firstObject.name === "Actions";
});
