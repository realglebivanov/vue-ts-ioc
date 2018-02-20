import { PluginObject, VueConstructor } from 'vue';

import { DIConfigurationMixin } from './di-configuration.mixin';
import { DIMixin } from './di.mixin';

export class Plugin implements PluginObject<undefined> {
    public install(vue: VueConstructor, options: undefined): void {
        vue.mixin(DIConfigurationMixin);
        vue.mixin(DIMixin);
    }
}
