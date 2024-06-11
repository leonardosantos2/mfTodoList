const storagePrototype = {
  getItem: function (key: string) {
    return localStorageMock[key] || null;
  },
  setItem: function (key: string, value: boolean | number | string) {
    if (!localStorageMock[key]) {
      this.length++;
    }
    localStorageMock[key] = value.toString();
  },
  removeItem: function (key: string) {
    if (localStorageMock[key]) {
      this.length--;
    }
    delete localStorageMock[key];
  },
  clear: function () {
    Object.keys(localStorageMock).forEach(
      (key) => delete localStorageMock[key],
    );
    this.length = 0;
  },
  length: 0,
};

export const localStorageMock = Object.create(storagePrototype);

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
