import Vue from 'vue';
import Component from 'vue-class-component';

import { ClassBuilderFactory } from 'ts-ioc-di';

@Component
export class DIMixin extends Vue {
    public beforeCreate(): void {
        ClassBuilderFactory.create(this.constructor, this.$container)
            .setProduct(this)
            .injectProperties()
            .injectMethods();
    }
}
