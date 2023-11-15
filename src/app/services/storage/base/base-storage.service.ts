export class BaseStorageService<T> {
  protected key!: string;

  /**
   * used to updates a single value in a object store
   *
   * @param key - the key of the property to be set
   * @param data - the new data to be saved
   */
  update<K extends keyof T>(key: K, data: T[K]): void {
    const currentValue = JSON.parse(this.get() || '');
    const newStorage = { ...currentValue, [key]: data }
    this.set(newStorage);
  }

  /**
   * This is used to replace all current storage
   *
   * @param value - the new storage value
   */
  set(value: T): void {

    console.log('this.key', this.key);
    console.log('value', value);


    sessionStorage.setItem(this.key, JSON.stringify(value));
  }

  /**
   * Returns a storage value
   */
  get(): string | null {
    return sessionStorage.getItem(this.key);
  }

  /**
   * Remove storage
   */
  remove(): void {
    return sessionStorage.removeItem(this.key);
  }
}
