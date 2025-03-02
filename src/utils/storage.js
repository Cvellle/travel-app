const storagePrefix = 'qlab_travel_site-';

const storage = {
  get: (key) => {
    return localStorage.getItem(`${storagePrefix}${key}`);
  },
  set: (key, value) => {
    localStorage.setItem(`${storagePrefix}${key}`, value);
  },
  clear: (key) => {
    localStorage.removeItem(`${storagePrefix}${key}`);
  },
  clearStorage: () => {
    localStorage.clear();
  },
};

export { storage };
