import Vue from 'vue';
import Component from 'vue-class-component';

import { Configuration } from '@/providers';
import { Container } from 'ts-ioc-di';

@Component
export class DIConfigurationMixin extends Vue {
  public beforeCreate(): void {
    this.$container = this.$options.container
      || this.$options.parent && this.$options.parent.$container
      || new Container();
    this.$iocConfig = this.$options.iocConfig
      || this.$options.parent && this.$options.parent.$iocConfig
      || new Configuration();
  }
}
