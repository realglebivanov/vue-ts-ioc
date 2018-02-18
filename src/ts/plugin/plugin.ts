import { PluginObject, VueConstructor } from 'vue';

import { IoCMixin } from './ioc.mixin';

export class Plugin implements PluginObject<undefined> {
    public install(vue: VueConstructor, options: undefined): void {
        vue.mixin(IoCMixin);
    }
}
