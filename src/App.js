import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import ItemHeader from "./components/item/ItemHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/item" element={<ItemHeader />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
