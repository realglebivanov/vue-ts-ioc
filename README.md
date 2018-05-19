# vue-ts-ioc
VueJS bindings for IoC container and DI

## Dependencies
- vue
- vue-class-component
- ts-ioc-di

## Note
Version from [github](https://github.com/glebivanov816/vue-class-component/tree/reflect-metadata-support-public) of `vue-class-component` is being used here, 'cause `vue-class-component` [doesnt support metadata forwarding](https://github.com/vuejs/vue-class-component/pull/227) which is required for this feature to work properly.

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
## Fully configured setup
Idea of Service Providers is the same as in [Laravel](https://laravel.com/).
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

## Finally, usage of DI
All [features](https://github.com/glebivanov816/ts-ioc-di) are available. 
Your components should be `Autowired` classes for DI to work here.
```
// Somewhere in one of your components
import { Service } from 'somewhere';
import { Inject, InjectArgs, Autowired } from 'vue-ts-ioc';

import Component from 'vue-class-component';

@Autowired()
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
