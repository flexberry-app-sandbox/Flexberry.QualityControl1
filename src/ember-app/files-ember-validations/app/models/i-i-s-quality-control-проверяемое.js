import {
  defineNamespace,
  defineProjections,
  Model as ПроверяемоеMixin
} from '../mixins/regenerated/models/i-i-s-quality-control-проверяемое';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроверяемоеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
