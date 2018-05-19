import { PluginObject, VueConstructor } from 'vue';

import { DIMixin } from './di.mixin';

export const Plugin: PluginObject<undefined> = {
  install: (vue: VueConstructor) => vue.mixin(DIMixin)
};
