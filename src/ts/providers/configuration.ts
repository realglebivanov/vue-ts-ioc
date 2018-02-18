import { Constructor } from './constructor';
import { Provider } from './provider';
import { Container } from 'ts-ioc-di';

export class Configuration {
    public constructor(
        private providerClasses: Array<Constructor> = []
    ) { }

    public setProviderClasses(providerClasses: Array<Constructor>): void {
        this.providerClasses = providerClasses;
    }

    public getProviders(container: Container): Array<Provider> {
        return this.providerClasses.map(
            (constructor: Constructor) => new constructor(container)
        );
    }
}
