import { Container } from 'ts-ioc-di';
import { Application } from '@/plugin';
import { Provider } from './provider';

export interface Constructor {
    new(application: Application): Provider;
}
