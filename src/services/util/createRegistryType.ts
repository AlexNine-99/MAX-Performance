import { createSafeMapType } from './safe-types/SafeMap'

export default function createRegistryType<T>(itemDescriptor: string) {
  return createSafeMapType<string, T>('id', itemDescriptor)
}
