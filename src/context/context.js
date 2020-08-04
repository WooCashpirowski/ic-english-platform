import React, { useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isTrainer, setIsTrainer] = useState(false);
  const setTrainer = (bool) => {
    setIsTrainer(bool);
    return isTrainer;
  };
  return (
    <AppContext.Provider value={{ isTrainer, setTrainer }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
