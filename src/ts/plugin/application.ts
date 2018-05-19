import Vue from 'vue';
import Component from 'vue-class-component';
import { Provider } from '@/providers';

@Component
export class Application extends Vue {
  public beforeCreate(): void {
    const providers = this.$iocConfig.getProviders();
    providers.forEach((provider: Provider) => provider.register(this.$container));
    providers.forEach((provider: Provider) => provider.boot(this.$container));
  }
}
