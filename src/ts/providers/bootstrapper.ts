import { Application } from '@/plugin';
import { Provider } from './provider';

export class Bootstrapper {
    private providers: Array<Provider>;

    public constructor(app: Application) {
        this.providers = app.$iocConfig.getProviders(app);
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
