import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../Components/personal-info";

function PageRoutes(props: {
  stepCount: number;
  setStepCount: (status: number) => void;
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PersonalInfo
            stepCount={props.stepCount}
            setStepCount={props.setStepCount}
          />
        }
      ></Route>
    </Routes>
  );
}

export default PageRoutes;
