import "../css/App.css";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import { Route, Routes as BaseRoutes } from "react-router-dom";

function App() {
  // const user = {name: "mahansh"};
  const user = null; 

  console.log("user:", user);

  return (
    <div className="App">
      <BaseRoutes>
        {!user ? 
        ( <Route path="/LoginScreen" element={<LoginScreen />} />) : 

        (
          <Route path="/" element={<HomeScreen />} />
        )}
      </BaseRoutes>
    </div>
  );
}


export default App;