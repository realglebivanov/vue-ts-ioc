import Vue, { VueConstructor } from 'vue';
import Component from 'vue-class-component';

import { ClassBuilderFactory } from 'ts-ioc-di';

@Component
export class DIMixin extends Vue {
    public beforeCreate(): void {
        const constructor = this.constructor as VueConstructor;
        const classBuilder = ClassBuilderFactory.create(constructor, this.$container);
        classBuilder.setProduct(this).injectProperties().injectMethods();
    }
}
