import Vue from 'vue';
import Component from 'vue-class-component';

import { InstanceBuilderFactory } from 'ts-ioc-di';

@Component
export class DIMixin extends Vue {
  public beforeCreate(): void {
    const thisClass = this.constructor as typeof Vue;
    const instanceBuilder = InstanceBuilderFactory.create(thisClass, this.$container);
    instanceBuilder.setProduct(this).injectProperties().injectMethods();
  }
}
