import { Injectable, Inject } from '@/index';
import { FixtureDependency } from './fixture.dependency';

@Injectable
export class FixtureClass {
    public constructor(
        public dep1: FixtureDependency
    ) { }

    @Inject()
    public dep2?: FixtureDependency;
}
