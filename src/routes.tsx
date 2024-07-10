import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./components/personal-info";
import SelectPlan from "./components/select-plan";
import PickAddOns from "./components/pick-add-ons";
import FinishingUp from "./components/finishing-up";
import Finish from "./components/finish";
import { StateProvider } from "./utils/state-provider";

function PageRoutes() {
  return (
    <StateProvider>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/pick-add-ons" element={<PickAddOns />} />
        <Route path="/finishing-up" element={<FinishingUp />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </StateProvider>
  );
}

export default PageRoutes;
