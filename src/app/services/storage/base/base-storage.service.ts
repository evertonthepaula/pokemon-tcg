export abstract class BaseStorageService<T> {
  private key!: string;

  constructor(key: string) {
    this.key = key;
  }

  /**
   * used to updates a single value in a object store
   *
   * @param key - the key of the property to be set
   * @param data - the new data to be saved
   */
  update<K extends keyof T>(key: K, data: T[K]): void {
    this.set({ ...this.get(), [key]: data });
  }

  /**
   * This is used to replace all current storage
   *
   * @param value - the new storage value
   */
  set(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  /**
   * Returns a storage value
   */
  get(): T {
    return JSON.parse(localStorage.getItem(this.key) || '{}');
  }

  /**
   * Remove storage
   */
  remove(): void {
    return localStorage.removeItem(this.key);
  }
}
