import { Provider } from './provider';

export interface Constructor {
  new(): Provider;
}
