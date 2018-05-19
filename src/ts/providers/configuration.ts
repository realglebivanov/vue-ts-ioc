import { Constructor } from './constructor';
import { Provider } from './provider';

export class Configuration {
  private providerClasses: Array<Constructor>;

  public constructor(...providerClasses: Array<Constructor>) {
    this.providerClasses = providerClasses;
  }

  public setProviderClasses(providerClasses: Array<Constructor>): void {
    this.providerClasses = providerClasses;
  }

  public getProviders(): Array<Provider> {
    return this.providerClasses.map((ctor: Constructor) => new ctor);
  }
}
