export type LoginType = {
  email: string;
  password: string;
};

export type PaymentType = {
  tick: string;
  text?: string;
  image: string;
  name: string;
};

export type PlanType = {
  type: string;
  name: string;
  heading: string;
  features: string[];
};

export type PlanGroupType = {
  type: string;
  plans: PlanType[];
};

export type UsageType = {
  name: string;
  tick: string;
  image: string;
  heading: string;
  text: string;
};

export interface AppContextInterface {
  login?: Promise;
  createAccount?: Promise;
  usages: UsageType[];
  plans: PlanType[];
  planGroups: PlanGroupType[];
  paymentMethods: PaymentType[];
}
