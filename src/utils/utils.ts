function isNullOrUndefined<Type>(value: Type): boolean {
  return value === undefined || value === null;
}

function Enum<T extends object>(baseEnum: T): T {
  return new Proxy(baseEnum, {
    get(_, name) {
      if (!Object.prototype.hasOwnProperty.call(baseEnum, name)) {
        throw new Error(`"${String(name)}" value does not exist in the enum`);
      }
      return (baseEnum as Record<string | symbol, unknown>)[name];
    },
    set() {
      throw new Error("Cannot add a new value to the enum");
    },
  }) as T;
}

export { isNullOrUndefined, Enum };
