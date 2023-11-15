import { Signal, computed, signal } from '@angular/core';

export abstract class BaseSignalService<T> {
  private readonly state = signal({} as T);

  /**
   * Returns a snapshot version of this signal state.
   */
  get snapshot(): T {
    return (this.state.asReadonly())();
  }

  /**
   * This is used to set a initial value for state
   *
   * @param initialState - the initial state value
   */
  protected set(initialState: T) {
    this.state.set(initialState)
  }

  /**
   * Returns a reactive value for a property on the state.
   * This is used when the consumer needs the signal for
   * specific part of the state.
   *
   * @param key - the key of the property to be retrieved
   */
  protected select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }

  /**
   * This is used to mutates a value for a property
   *
   * @param key - the key of the property to be set
   * @param data - the new data to be saved
   */
  protected mutate<K extends keyof T>(key: K, data: T[K]) {
    this.state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  /**
   * Sets values for multiple properties on the store
   * This is used when there is a need to update multiple
   * properties in the store
   *
   * @param partialState - the partial state that includes
   *                      the new value to be saved
   */
  protected update(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({ ...currentValue, ...partialState }));
  }
}
