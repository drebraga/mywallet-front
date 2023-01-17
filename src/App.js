import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles/Reset";
import ValuePage from "./Pages/NewEntry/ValuePage";
import LoginPage from "./Pages/Sign-in/LoginPage";
import SignInPage from "./Pages/Sign-in/SignInPage";
import Wallet from "./Pages/Wallet/WalletPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignInPage />} />
        <Route path="/home" element={<Wallet />} />
        <Route path="/nova-entrada" element={<ValuePage />} />
        <Route path="*" element={"Erro, caminho errado"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
