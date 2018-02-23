# vue-ts-ioc
VueJS bindings for IoC container and DI

## About
I'll publish the package after [this](https://github.com/vuejs/vue-class-component/pull/227) pull-request is merged. 

## Dependencies
- vue
- vue-class-component
- ts-ioc-di

## Simple setup
```
import Vue from 'vue';
import { Application, Plugin } from 'vue-ts-ioc';

Vue.use(new Plugin());

new Application({
 // Vue componentOptions here
});
```
## Setup with manually instantiated container
```
import Vue from 'vue';
import { Application, Plugin, Container } from 'vue-ts-ioc';

Vue.use(new Plugin());

// ...

const container = new Container();

// bind things to container

new Application({
 // Vue componentOptions here,
 container: container
});
```
## Fully configured setup
Idea of Service Providers is the same as in [Laravel](https://laravel.com/). 
They are used to bind dependencies to container in two phases - registration and booting.
In first phase you should not resolve any dependencies from container since they may have not been registered.
In second phase you can resolve those dependencies and register another dependencies using them.
```
import Vue from 'vue';
import { Application, Plugin, Configuration, Provider } from 'vue-ts-ioc';

Vue.use(new Plugin());

// ...

class ServiceProvider extends Provider {
  public register(): void {
    this.app.$container.singleton(Service);
  }
  
  public boot(): void {
    this.app.$container.resolve(AnotherService);
  }
}

// ...

const config = new Configuration([
  ServiceProvider
]);

new Application({
 // Vue componentOptions here,
 iocConfig: config
});
```

## Finally, usage of DI
All [features](https://github.com/glebivanov816/ts-ioc-di) are available
```
// Somewhere in one of your components
import { Service } from 'somewhere';
import { Inject, InjectArgs } from 'vue-ts-ioc';

import Component from 'vue-class-component';

@Component
class TestComponent extends Vue {
  @Inject()
  private service?: Service;
  
  @InjectArgs()
  public beforeCreate(service: Service): void {
    // service is injected
  }
}

```
## Pitfalls
- You should not try to instantiate Vue components with container
They are instantiated by VueJS internally and constructor injection is not possible here.
