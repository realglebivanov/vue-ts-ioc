import Vue from 'vue';
import { expect, assert } from 'chai';

import { Application, Plugin, Configuration, Container } from '@/index';

import {
    FixtureComponent,
    FixtureClass,
    FixtureProvider
} from './fixtures';

Vue.use(Plugin);

describe('Application', function () {
    it('works with Application as a mixin', function () {
        const application: Vue = new Vue({ mixins: [Application] });
        const component: FixtureComponent = new FixtureComponent({ parent: application });

        assert.instanceOf(component.dep1, FixtureClass);
        assert.instanceOf(component.dep2, FixtureClass);
    });

    it('works without special setup', function () {
        const application: Application = new Application();
        const component: FixtureComponent = new FixtureComponent({ parent: application });

        assert.instanceOf(component.dep1, FixtureClass);
        assert.instanceOf(component.dep2, FixtureClass);
    });

    it('works with manually instantiated container', function () {
        const container: Container = new Container();
        container.singleton(FixtureClass);

        const application: Application = new Application({ container: container });
        const component: FixtureComponent = new FixtureComponent({ parent: application });

        assert.instanceOf(component.dep1, FixtureClass);
        assert.instanceOf(component.dep2, FixtureClass);
        expect(component.dep1).to.equal(component.dep2);
    });

    it('works with providers-based setup', function () {
        const application: Application = new Application({ iocConfig: new Configuration(FixtureProvider) });
        const component: FixtureComponent = new FixtureComponent({ parent: application });

        assert.instanceOf(component.dep1, FixtureClass);
        assert.instanceOf(component.dep2, FixtureClass);
        expect(component.dep1).to.equal(component.dep2);
    });
});
