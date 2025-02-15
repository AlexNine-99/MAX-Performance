export type CalculatorOutput =
  | { type: 'result'; value: string }
  | { type: 'error'; inputId: string; message: string }

export default interface Calculator {
  inputIds: Set<string>
  calculate(inputValues: Map<string, string>): Map<string, CalculatorOutput>
}
