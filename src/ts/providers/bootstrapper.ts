import { Configuration } from './configuration';
import { Provider } from './provider';
import { Container } from 'ts-ioc-di';

export class Bootstrapper {
    private providers: Array<Provider>;

    public constructor(configuration: Configuration, container: Container) {
        this.providers = configuration.getProviders(container);
    }

    public bootstrap(): void {
        this.registerAll().bootAll();
    }

    private registerAll(): Bootstrapper {
        this.providers.forEach(provider => provider.register());

        return this;
    }

    private bootAll(): void {
        this.providers.forEach(provider => provider.boot());
    }
}
