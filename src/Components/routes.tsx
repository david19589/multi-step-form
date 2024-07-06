import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../Components/personal-info";
import SelectPlan from "./select-plan";
import { useState } from "react";

function PageRoutes() {
  const [stepCount, setStepCount] = useState(1);
  const [isToggled, setIsToggled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PersonalInfo
            stepCount={stepCount}
            setStepCount={setStepCount}
          />
        }
      ></Route>
      <Route
        path="/select-plan"
        element={
          <SelectPlan
            stepCount={stepCount}
            setStepCount={setStepCount}
            isToggled={isToggled}
            setIsToggled={setIsToggled}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        }
      ></Route>
    </Routes>
  );
}

export default PageRoutes;
