export type LoginType = {
  email: string;
  password: string;
};

export type PaymentDetailType = {
  email: string;
  card_cvv: string;
  country: string;
  card_number: string;
  card_name: string;
  expiry_date: string;
  amount: string;
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
  amount: string;
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
  register?: Promise;
  usages: UsageType[];
  plans: PlanType[];
  planGroups: PlanGroupType[];
  paymentMethods: PaymentType[];
  pay: Promise;
  isLoading: boolean;
  setIsLoading: (arg: boolean) => void;
}
