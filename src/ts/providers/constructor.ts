import { Container } from 'ts-ioc-di';
import { Provider } from './provider';

export interface Constructor {
    new(container: Container): Provider;
}
