import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes";

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
