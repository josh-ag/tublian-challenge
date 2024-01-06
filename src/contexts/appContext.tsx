import React, { createContext, useState } from "react";
import {
  AppContextInterface,
  LoginType,
  PaymentDetailType,
  PlanGroupType,
  PlanType,
} from "../type";
import {
  planTypesData,
  usageData as usages,
  paymentMethodsData as paymentMethods,
} from "../data";

const baseUrl = "https://tublian-challenge.onrender.com";

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

//Subscriptions/Plans
const plans: PlanType[] = [...planTypesData];
const planGroups: PlanGroupType[] = [
  { type: "Monthly", plans: [...plans] },
  { type: "Annually", plans: [...plans] },
];

//@Context Provider
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //@loginhandler
  const login = async (loginData: LoginType) => {
    const abortController = new AbortController();
    //timeout req. after 15sec.
    const timeoutId = setTimeout(() => abortController.abort(), 15000);

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

  //@registration handler
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

  //@payment handler
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
        isLoading,
        setIsLoading,
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
