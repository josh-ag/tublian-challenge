export type RadioType = {
  name: string;
  tick: string;
  image: string;
  heading: string;
  text: string;
};

export type ButtonType = {
  tick: string;
  text?: string;
  image: string;
  name: string;
};

export type PaymentType = {
  type: string;
  name: string;
  heading: string;
  features: string[];
};
