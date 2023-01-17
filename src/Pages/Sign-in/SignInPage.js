import { Link } from "react-router-dom";
import { Page, Title, InputsLogin, SignIn } from "./styled"

const SignInPage = () => {
    return (
        <Page>
            <Title>MyWallet</Title>
            <InputsLogin>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Confirme a senha" />
                <button>Cadastrar</button>
            </InputsLogin>
            <Link to="/">
                <SignIn>Já tem uma conta? Entre agora!</SignIn>
            </Link>
        </Page>
    );
}

export default SignInPage;