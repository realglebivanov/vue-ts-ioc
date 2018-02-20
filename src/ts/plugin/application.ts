import Vue from 'vue';
import Component from 'vue-class-component';
import { Bootstrapper } from '@/providers';

@Component
export class Application extends Vue {
    public beforeCreate(): void {
        new Bootstrapper(this).bootstrap();
    }
}
