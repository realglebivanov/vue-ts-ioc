import { Provider } from '@/index';
import { FixtureClass } from './fixture.class';

export class FixtureProvider extends Provider {
    public register(): void {
        this.app.$container.singleton(FixtureClass);
    }
}
