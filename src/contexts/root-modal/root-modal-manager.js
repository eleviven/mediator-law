class RootModalManager {
  _defaultRef = null;
  register(_ref) {
    if (!this._defaultRef && "_id" in _ref) {
      this._defaultRef = _ref;
    }
  }
  unregister(_ref) {
    if (!!this._defaultRef && _ref._id === this._defaultRef._id) {
      this._defaultRef = null;
    }
  }
  get() {
    return this._defaultRef;
  }
}

export default new RootModalManager();
