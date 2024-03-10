import { useEffect, useState } from "react";
import "./App.css";
import Routerfile from "./components/routes/Routerfile";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4500);
  }, []);
  return (
    <div className="App">
      <div className="row m-0">
        {loading ? (
          <div className="bg-black absolute">
            <div class="loader">
              <span className="display-1 fw-bolder">PORTMANN</span>
              <span className="display-1 fw-bolder">PORTMANN</span>
            </div>
          </div>
        ) : (
          <Routerfile />
        )}
      </div>
    </div>
  );
}

export default App;
