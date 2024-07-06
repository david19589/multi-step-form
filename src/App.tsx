import { useState } from "react";
import Header from "./Components/header";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Components/routes";

function App() {
  const [stepCount, setStepCount] = useState(1);

  return (
    <BrowserRouter>
      <div>
        <Header stepCount={stepCount} />
        <PageRoutes stepCount={stepCount} setStepCount={setStepCount} />
      </div>
    </BrowserRouter>
  );
}

export default App;
