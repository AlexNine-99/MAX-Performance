export type InputState =
  | { type: 'disabled' }
  | { type: 'normal'; value: string }
  | { type: 'error'; message: string }
