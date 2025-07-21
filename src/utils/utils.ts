function isNullOrUndefined<Type>(value: Type): boolean {
    return value === undefined || value === null;
  }

export {isNullOrUndefined}