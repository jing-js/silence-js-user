'use strict';

class SessionUser {
  constructor() {

    this.$$freeListPosition = -1;
    this.$$freeListNext = -1;

    this.sessionId = null;
    this.isLogin = false;
    this._attrs = null;
  }
  $$freeListInit() {
    // need nothing
  }
  $$freeListFree() {
    this.sessionId = null;
    this.isLogin = false;
    this._attrs = null;
  }
  get id() {
    return this._attrs ? (this._attrs.id || null) : null;
  }
  get attrs() {
    if (this._attrs === null) {
      this._attrs = Object.create(null);
    }
    return this._attrs;
  }
  assign(identity) {
    for(let p in identity) {
      if (typeof identity[p] !== 'undefined') {
        this.attrs[p] = identity[p];
      }
    }
  }
}

module.exports = SessionUser;
