'use strict';

class SessionUser {
  constructor() {
    this._attrs = null; 
  }
  get attrs() {
    if (!this._attrs) {
      this._attrs = new Map();
    }
    return this._attrs;
  }
  get id() {
    return this.attrs.get('id');
  }
  setAttribute(attrName, attrValue) {

  }
}

module.exports = SessionUser;
