import { Application } from '@/plugin';

export abstract class Provider {
    public constructor(
        protected app: Application
    ) { }

    public boot(): void {

    }

    public register(): void {

    }
}
