'use strict';

class SessionUser {
  constructor() {
    this.$$freeListIsUsed = true;
    this.sessionId = null;
    this.isLogin = false;
    this._attrs = null;
  }
  $$freeListInit() {
    this.sessionId = null;
    this.isLogin = false;
    this._attrs = null;
  }
  $$freeListFree() {
    this.$$freeListInit();
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
