import type { ClassFee } from "../../DATA_MOCKS/classWiseFeesMock";
import type { ChartData } from "chart.js";

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


const transformData = (data: ClassFee<string>[]): ChartData<"bar"> => {
  return {
    labels: data.map((item) => item.class),
    datasets: [
      {
        label: "Fees Paid",
        data: data.map((item) => item.feesPaid),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Fees Pending",
        data: data.map((item) => item.feesPending),
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };
};

export { isNullOrUndefined, Enum, transformData };
