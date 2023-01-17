import { Link } from "react-router-dom";
import { Page, Title, InputsLogin, SignIn } from "./styled"

const LoginPage = () => {
    return (
        <Page>
            <Title>MyWallet</Title>
            <InputsLogin>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Senha" />
                <button>Entrar</button>
            </InputsLogin>
            <Link to="/cadastro">
                <SignIn>Primeira vez? Cadastre-se!</SignIn>
            </Link>
        </Page>
    );
}

export default LoginPage;