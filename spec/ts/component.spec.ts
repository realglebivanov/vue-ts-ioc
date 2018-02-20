import Vue from 'vue';
import { expect, assert } from 'chai';

import { Application, Plugin, Container, Configuration } from '@/index';

import {
    FixtureComponent,
    FixtureClass,
    FixtureDependency,
    FixtureProvider
} from './fixtures';

Vue.use(new Plugin());

describe(Application.name, function () {
    const container: Container = new Container();
    const iocConfig: Configuration = new Configuration([FixtureProvider]);
    const application: Application = new Application({ container: container, iocConfig: iocConfig });
    const component: FixtureComponent = new FixtureComponent({ parent: application });

    it('Property DI and Method DI work', function () {
        assert.instanceOf(component.dep1, FixtureClass);
        assert.instanceOf(component.dep2, FixtureClass);
        expect(component.dep1).to.equal(component.dep2);
    });
});
