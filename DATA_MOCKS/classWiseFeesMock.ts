export type ClassFee<T = string> = {
  class: T;            // can be string, number, etc.
  feesPaid: number;
  feesPending: number;
};

export const CLASS_WISE_FEES_MOCK: ClassFee<string>[] = [
    {
      class: '1',
      feesPaid: 1000,
      feesPending: 2000
    },
    {
      class: '2',
      feesPaid: 1500,
      feesPending: 1500
    },
    
    {
      class: '3',
      feesPaid: 2000,
      feesPending: 1000
    },
    {
      class: '4',
      feesPaid: 2500,
      feesPending: 500
    },
    {
      class: '5',
      feesPaid: 3000,
      feesPending: 0
    },
    {
      class: '6',
      feesPaid: 3000,
      feesPending: 0
    },
    
    {
      class: '7',
      feesPaid: 3500,
      feesPending: 0
    },
    
    {
      class: '8',
      feesPaid: 4000,
      feesPending: 0
    },
    
    {
      class: '9',
      feesPaid: 4500,
      feesPending: 0
    },
    
    {
      class: '10',
      feesPaid: 5000,
      feesPending: 0
    },
    
  ]