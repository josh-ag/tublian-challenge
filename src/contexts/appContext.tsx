import React, { createContext } from "react";
import {
  AppContextInterface,
  LoginType,
  PaymentType,
  PlanGroupType,
  PlanType,
  UsageType,
} from "../type";
import cardLogo from "../assets/card.svg";
import googlePay from "../assets/google_pay.svg";
import tickCircle from "../assets/tick-circle.svg";
import teamProjectImage from "../assets/team_project_card1.svg";
import personalProjectImage from "../assets/personalProjectImage.svg";
import recruitingImage from "../assets/recruitingImage.svg";

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

/*
==============================================================

                           DATA

===============================================================
*/
//users usage option
const usages: UsageType[] = [
  {
    name: "team",
    tick: tickCircle,
    image: teamProjectImage,
    heading: "Team Projects",
    text: "Hire developer for team projects",
  },
  {
    name: "personal",
    tick: tickCircle,
    image: personalProjectImage,
    heading: "Personal Project",
    text: "Hire developer for personal projects",
  },

  {
    name: "recruiting",
    tick: tickCircle,
    heading: "Recruiting",
    image: recruitingImage,
    text: "Recruit developer for outstanding companies",
  },
];

const planTypes = [
  {
    type: "Pro",
    name: "Pro",
    heading: "$19.99/Month",
    features: [
      "Advanced search for developer profiles with filters.",
      "Increased monthly messages to developers.",
      "Priority support.",
    ],
  },
  {
    type: "Business Plan",
    name: "Business",
    heading: "$49.99/Month",
    features: [
      "Premium access to developer profiles and advanced search filters.",
      "Increased monthly messages to developers.",
      "Dedicated account manager for personalized support.",
      "Early access to new features and updates.",
    ],
  },
  {
    type: "Enterprise Plan",
    name: "Enterprise",
    heading: "Cutom Pricing",
    features: [
      "Tailored solutions for large enterprises or agencies.",
      "Full access to all platform features, including custom integrations.",
      "Unlimited monthly messages to developers.",
      "Priority support with 24/7 availability.",
    ],
  },
];

//Subscriptions/Plans
const plans: PlanType[] = [...planTypes];
const planGroups: PlanGroupType[] = [
  { type: "Monthly", plans: [...plans] },
  { type: "Annually", plans: [...plans] },
];

//@Payment Method/Type
const paymentMethods: PaymentType[] = [
  {
    name: "Card",
    tick: tickCircle,
    text: "Card Payment",
    image: cardLogo,
  },
  {
    name: "Google",
    tick: tickCircle,
    image: googlePay,
  },
];

//@Context Provider
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //@login user
  const login = async (loginData: LoginType) => {
    try {
      const loginResp = await fetch("/api/login", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        method: "POST",
      });

      const res = await loginResp.json();

      return res;
    } catch (err) {
      throw err;
    }
  };

  const createAccount = async (data: LoginType) => {
    if (data) {
      return console.log(data);
    }

    try {
      const resp = await fetch("/api/account/create", {
        body: JSON.stringify(data),
      });

      const res = await resp.json();

      if (res?.statusCode == 200) {
        //@success resp
        return console.log(res.body);
      }

      //@fail reason
      console.log(res.error);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        login,
        createAccount,
        usages,
        plans,
        paymentMethods,
        planGroups,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
