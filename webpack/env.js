module.exports = class Env {
  constructor(givenName) {
    this.givenName = givenName;
  }

  is(name) {
    return this.name === name;
  }

  get mode() {
    return this.is('production') || this.is('development') ? this.name : 'none';
  }

  get name() {
    return this.givenName;
  }
}
