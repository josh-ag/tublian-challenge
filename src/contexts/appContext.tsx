import React, { createContext } from "react";
import {
  AppContextInterface,
  LoginType,
  PaymentDetailType,
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
const baseUrl = "https://tublian-challenge.onrender.com";

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
    amount: "$19.99",
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
    amount: "$49.99",
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
    amount: "Custom Pricing",
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
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 15000);
    //timeout after 20sec.

    try {
      const resp = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        signal: abortController.signal,
        body: JSON.stringify(loginData),
      });

      return resp;
    } catch (err) {
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const register = async (data: LoginType) => {
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 15000);

    try {
      const resp = await fetch(`${baseUrl}/api/account/create`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        mode: "cors",
        signal: abortController.signal,
        body: JSON.stringify(data),
      });

      return resp;
    } catch (err) {
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const pay = async (paymentDetail: PaymentDetailType) => {
    //@get auth token
    const token = localStorage.getItem("_token");
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 15000);

    try {
      const resp = await fetch(`${baseUrl}/api/pay`, {
        method: "POST",
        mode: "cors",
        signal: abortController.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(paymentDetail),
      });

      return resp;
    } catch (err) {
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return (
    <AppContext.Provider
      value={{
        login,
        register,
        usages,
        plans,
        paymentMethods,
        planGroups,
        pay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
