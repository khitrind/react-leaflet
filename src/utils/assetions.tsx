export class AssertionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, AssertionError.prototype);
  }
}

export function assertIs(condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(message ?? 'Assert condition failed');
  }
}

export function assertIsDefined<T>(value: T, message?: string): asserts value is NonNullable<T> {
  const isValidValue = value !== undefined && value !== null;
  const wrongValueDefaultMessage = !isValidValue ? `Expected 'value' to be defined, but receive ${value}` : '';

  assertIs(isValidValue, message ?? wrongValueDefaultMessage);
}
