import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../Components/personal-info";
import SelectPlan from "./select-plan";
import { useState } from "react";
import PickAddOns from "./pick-add-ons";
import FinishingUp from "./finishing-up";
import Finish from "./finish";

function PageRoutes() {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />}></Route>
      <Route
        path="/select-plan"
        element={
          <SelectPlan
            isToggled={isToggled}
            setIsToggled={setIsToggled}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        }
      ></Route>
      <Route
        path="/pick-add-ons"
        element={
          <PickAddOns
            isToggled={isToggled}
            onlineService={onlineService}
            setOnlineService={setOnlineService}
            largerStorage={largerStorage}
            setLargerStorage={setLargerStorage}
            customizableProfile={customizableProfile}
            setCustomizableProfile={setCustomizableProfile}
          />
        }
      ></Route>
      <Route
        path="/finishing-up"
        element={
          <FinishingUp
            isToggled={isToggled}
            setIsToggled={setIsToggled}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onlineService={onlineService}
            setOnlineService={setOnlineService}
            largerStorage={largerStorage}
            setLargerStorage={setLargerStorage}
            customizableProfile={customizableProfile}
            setCustomizableProfile={setCustomizableProfile}
          />
        }
      ></Route>
      <Route path="/finish" element={<Finish />}></Route>
    </Routes>
  );
}

export default PageRoutes;
