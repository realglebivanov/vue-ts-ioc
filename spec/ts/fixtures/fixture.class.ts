import { Injectable, Inject, InjectArgs } from '@/index';
import { FixtureDependency } from './fixture.dependency';

@Injectable
export class FixtureClass {
    public constructor(
        public dep1: FixtureDependency
    ) { }

    @Inject()
    public dep2?: FixtureDependency;

    @InjectArgs()
    public test(dep3?: FixtureDependency): FixtureDependency {
        return dep3 as FixtureDependency;
    }
}
