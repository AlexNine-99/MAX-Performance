import { capitalize } from './util/capitalize'

export interface SafeSet<T> {
  add(item: T): void
  asUnsafe(): Set<T>
}

export function createSafeSetType<T>(itemDescriptor: string) {
  return class SafeSetImpl<U = T> implements SafeSet<U> {
    private readonly set = new Set<U>()
    private readonly capitalizedDescriptor = capitalize(itemDescriptor)

    add(value: U) {
      if (this.set.has(value)) {
        throw new Error(``)
      }
      this.set.add(value)
    }

    asUnsafe() {
      return [...this.set.entries()].reduce((set, [_prev, value]) => set.add(value), new Set<U>())
    }
  }
}
