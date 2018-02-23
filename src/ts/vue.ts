import Vue from 'vue';
import { Container } from 'ts-ioc-di';
import { Configuration } from './providers';

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        iocConfig?: Configuration;
        container?: Container;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $iocConfig: Configuration;
        $container: Container;
    }
}
