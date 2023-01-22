import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./components/Context/Context";
import GlobalStyle from "./Styles/Reset";
import InPage from "./Pages/NewEntry/InPage";
import OutPage from "./Pages/NewEntry/OutPage";
import LoginPage from "./Pages/Sign-in/LoginPage";
import SignInPage from "./Pages/Sign-in/SignInPage";
import Wallet from "./Pages/Wallet/WalletPage";
import EditInPage from "./Pages/NewEntry/EditInPage";
import EditOutPage from "./Pages/NewEntry/EditOutPage";

function App() {
  const [resLogin, setResLogin] = useState(JSON.parse(localStorage.getItem("token")));

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ resLogin, setResLogin }} >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignInPage />} />
          <Route path="/home" element={<Wallet />} />
          <Route path="/nova-entrada" element={<InPage />} />
          <Route path="/nova-saida" element={<OutPage />} />
          <Route path="/editar-entrada/:id" element={<EditInPage />} />
          <Route path="/editar-saida/:id" element={<EditOutPage />} />
          <Route path="*" element={"Erro, caminho errado"} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
