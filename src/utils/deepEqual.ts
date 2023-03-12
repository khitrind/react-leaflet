const { hasOwnProperty } = Object.prototype;

export const deepEqual = (valueA: any, valueB: any) => {
  if (Object.is(valueA, valueB)) {
    return true;
  }

  if (
    typeof valueA !== 'object' ||
    valueA === null ||
    typeof valueB !== 'object' ||
    valueB === null
  ) {
    return Object.is(valueA, valueB);
  }

  const keysA = Object.keys(valueA);
  const keysB = Object.keys(valueB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];

    if (!hasOwnProperty.call(valueB, key) || !deepEqual(valueA[key], valueB[key])) {
      return false;
    }
  }

  return true;
};
