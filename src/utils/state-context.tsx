import { createContext } from "react";

export interface StateContextProps {
  isToggled: boolean;
  setIsToggled: (status: boolean) => void;
  selectedPlan: number;
  setSelectedPlan: (status: number) => void;
  onlineService: boolean;
  setOnlineService: (status: boolean) => void;
  largerStorage: boolean;
  setLargerStorage: (status: boolean) => void;
  customizableProfile: boolean;
  setCustomizableProfile: (status: boolean) => void;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

export default StateContext;
