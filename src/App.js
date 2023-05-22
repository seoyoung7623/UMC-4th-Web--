import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import ItemPage from "./page/ItemPage";
import ItemEditPage from "./page/ItemEditPage";
import JoinPage from "./page/JoinPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/item/edit" element={<ItemEditPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
