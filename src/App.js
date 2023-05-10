import { Route, Routes } from "react-router-dom";

// Page Components
import Homepage from "./views/Homepage";

function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
