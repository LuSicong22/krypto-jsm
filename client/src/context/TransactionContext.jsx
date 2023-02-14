import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

export const TransactionContext = React.createContext();

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {};

  const connectWallet = async () => {};

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        handleChange,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
