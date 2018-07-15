import { PluginObject, VueConstructor } from 'vue';

import { DIMixin } from './di.mixin';
import { DIConfigurationMixin } from './di-configuration.mixin';

export const Plugin: PluginObject<undefined> = {
  install: (vue: VueConstructor) => {
    vue.mixin(DIConfigurationMixin);
    vue.mixin(DIMixin);
  }
};
