import { useState } from "react";
import StateContext from "./state-context";
import { ReactNode } from "react";

interface StateProviderProps {
  children: ReactNode;
}

export function StateProvider({ children }: StateProviderProps) {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isToggled,
        setIsToggled,
        selectedPlan,
        setSelectedPlan,
        onlineService,
        setOnlineService,
        largerStorage,
        setLargerStorage,
        customizableProfile,
        setCustomizableProfile,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
