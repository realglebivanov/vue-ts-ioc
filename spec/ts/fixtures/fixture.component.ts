import Vue from 'vue';
import Component from 'vue-class-component';

import { Inject, InjectArgs } from '@/index';
import { FixtureClass } from './fixture.class';

@Component
export class FixtureComponent extends Vue {
    public dep2?: FixtureClass;

    @Inject()
    public dep1?: FixtureClass;

    @InjectArgs()
    public beforeCreate(dep2: FixtureClass): void {
        this.dep2 = dep2;
    }
}
