import Header from "./Components/header";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Components/routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="lg:hidden">
          <Header />
        </div>
        <PageRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
