import { capitalize } from './util/capitalize'

export interface SafeMap<K, V> {
  add(key: K, item: V): void
  get(id: K): V
  asUnsafe(): Map<K, V>
}

export function createSafeMapType<K, V>(
  keyDescriptor: string = 'key',
  valueDescriptor: string = 'item',
) {
  const capitalizedValueDescriptor = capitalize(valueDescriptor)

  return class SafeMapImpl<T = K, U = V> implements SafeMap<T, U> {
    private readonly map = new Map<T, U>()

    add(key: T, value: U) {
      if (this.map.has(key)) {
        throw new Error(
          `${capitalizedValueDescriptor} with ${keyDescriptor} '${key} is already added.`,
        )
      }
      this.map.set(key, value)
    }

    get(key: T): U {
      if (!this.map.has(key)) {
        throw new Error(`No ${valueDescriptor} with ${keyDescriptor} '${key} is added.`)
      }
      return this.map.get(key) as U
    }

    asUnsafe() {
      return [...this.map.entries()].reduce(
        (acc, [key, value]) => acc.set(key, value),
        new Map<T, U>(),
      )
    }
  }
}
