import { Application } from '@/plugin';
import { Constructor } from './constructor';
import { Provider } from './provider';

export class Configuration {
    public constructor(
        private providerClasses: Array<Constructor> = []
    ) { }

    public setProviderClasses(providerClasses: Array<Constructor>): void {
        this.providerClasses = providerClasses;
    }

    public getProviders(application: Application): Array<Provider> {
        return this.providerClasses.map(
            (constructor: Constructor) => new constructor(application)
        );
    }
}
