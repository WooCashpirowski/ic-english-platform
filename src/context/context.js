import React, { useState, createContext, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const trainerState = localStorage.getItem("isTrainer")
    ? JSON.parse(localStorage.getItem("isTrainer"))
    : [false];
  const [isTrainer, setIsTrainer] = useState(trainerState);
  const setTrainer = (bool) => {
    setIsTrainer(bool);
    return isTrainer;
  };
  useEffect(() => {
    localStorage.setItem("isTrainer", JSON.stringify(isTrainer));
  }, [isTrainer]);

  return (
    <AppContext.Provider value={{ isTrainer, setTrainer }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
