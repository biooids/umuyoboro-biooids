// src/lib/utils/storage.ts

/**
 * A simple, Promise-based wrapper around the browser's localStorage
 * that mimics the API of React Native's AsyncStorage.
 */
const storage = {
  /**
   * Saves a key-value pair to localStorage.
   * @param key The key to save.
   * @param value The value to save.
   * @returns A Promise that resolves when the operation is complete.
   */
  setItem: async (key: string, value: string): Promise<void> => {
    return Promise.resolve(localStorage.setItem(key, value));
  },

  /**
   * Retrieves a value from localStorage by its key.
   * @param key The key to retrieve.
   * @returns A Promise that resolves with the value, or null if not found.
   */
  getItem: async (key: string): Promise<string | null> => {
    return Promise.resolve(localStorage.getItem(key));
  },

  /**
   * Removes a key-value pair from localStorage.
   * @param key The key to remove.
   * @returns A Promise that resolves when the operation is complete.
   */
  removeItem: async (key: string): Promise<void> => {
    return Promise.resolve(localStorage.removeItem(key));
  },
};

export default storage;
