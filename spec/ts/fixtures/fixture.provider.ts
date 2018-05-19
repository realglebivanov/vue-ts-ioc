import { Provider } from '@/index';
import { FixtureClass } from './fixture.class';
import { Container } from 'ts-ioc-di';

export class FixtureProvider implements Provider {
    public register(container: Container): void {
        container.singleton(FixtureClass);
    }

    public boot(container: Container): void {

    }
}
