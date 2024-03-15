import { useEffect, useState } from "react";
import "./App.css";
import Routerfile from "./components/routes/Routerfile";
import image1 from "./components/media/jap.png";
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
            <img src={image1} alt="" className="img-fluid  mx-auto w-25 absolute2" />
          </div>
        ) : (
          <Routerfile />
        )}
      </div>
    </div>
  );
}

export default App;
