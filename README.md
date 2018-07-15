# vue-ts-ioc
VueJS bindings for IoC container and DI

## Dependencies
- vue
- vue-class-component
- ts-ioc-di

## Simple setup
```
import Vue from 'vue';
import { Application, Plugin } from 'vue-ts-ioc';

Vue.use(Plugin);

new Application({
 // Vue componentOptions here
});
```

If you don't want to instantiate `Application` from package, you can use it as a mixin in your root component.
There is only `beforeCreate` hook in it.

```
import Vue from 'vue';
import { Application, Plugin } from 'vue-ts-ioc';

Vue.use(Plugin);

new Vue({
  mixins: [Application]
 // Vue componentOptions here
});
```

## Setup with manually instantiated container
```
import Vue from 'vue';
import { Application, Plugin, Container } from 'vue-ts-ioc';

Vue.use(Plugin);

// ...

const container = new Container();

// bind things to container

new Application({
 // Vue componentOptions here,
 container: container
});
```
## Service providers setup
They are used to bind dependencies to container in two phases - registration and booting.
In first phase you should not resolve any dependencies from container since they may have not been registered.
In second phase you can resolve those dependencies and register another dependencies using them.
```
import Vue from 'vue';
import { Application, Plugin, Configuration, Provider } from 'vue-ts-ioc';

Vue.use(Plugin);

// ...

class ServiceProvider implements Provider {
  public register(container: Container): void {
    container.singleton(Service);
  }

  public boot(container: Container): void {
    container.resolve(AnotherService);
  }
}

// ...

new Application({
 // Vue componentOptions here,
 iocConfig: new Configuration(ServiceProvider)
});
```

## Usage
All [features](https://npmjs.com/package/ts-ioc-di) except constructor injection are available. 
```
// Somewhere in one of your components
import { Service } from 'somewhere';
import { Inject, InjectArgs, Autowired } from 'vue-ts-ioc';

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
