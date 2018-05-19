import { Container } from 'ts-ioc-di';

export interface Provider {
  boot(container: Container): void;

  register(container: Container): void;
}
