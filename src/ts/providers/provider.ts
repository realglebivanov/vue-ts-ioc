import { Container } from 'ts-ioc-di';

export abstract class Provider {
    public constructor(
        protected container: Container
    ) { }

    public boot(): void {

    }

    public register(): void {

    }
}
