import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import ItemPage from "./page/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/item" element={<ItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
