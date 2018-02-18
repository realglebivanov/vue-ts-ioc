import Vue from 'vue';
import Component from 'vue-class-component';

import { ClassBuilderFactory } from 'ts-ioc-di';

@Component
export class IoCMixin extends Vue {
    public beforeCreate(): void {
        this.$container = this.$options.container;
        this.$iocConfig = this.$options.iocConfig;
    }

    public created(): void {
        this.getClassBuilder().setProduct(this).injectProperties();
    }

    private getClassBuilder() {
        return ClassBuilderFactory.create(this.constructor, this.$container);
    }
}
