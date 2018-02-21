# vue-ts-ioc
VueJS bindings for IoC container and DI

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

// bind things to container

new Application({
 // Vue componentOptions here,
 iocConfig: config
});
```

## Finally, usage of DI
// Somewhere in one of your components
// All [features](https://github.com/glebivanov816/ts-ioc-di) are available
import { Service } from 'somewhere';
import { Inject, InjectArgs } from 'vue-ts-ioc';

class TestComponent extends Vue {
  @Inject()
  private service?: Service;
  
  @InjectArgs()
  public beforeCreate(service: Service): void {
    // service is injected
  }
}

```
