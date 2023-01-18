import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { Page, Title, InputsLogin, SignIn } from "./styled";

const SignInPage = () => {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(false);
    const [signData, setSignData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    });

    function handleInput(e) {
        setSignData({ ...signData, [e.target.name]: e.target.value });
    }

    function sendRequest(e) {
        e.preventDefault();
        setLoginStatus(true);
        navigate("/");
        // axios.post(`/sign-up`, signData)
        //     .then((res) => {
        //         setLoginStatus(false);
        //         console.log(res.data);
        //         navigate("/");
        //     })
        //     .catch((err) => {
        //         alert(err.response.data.message);
        //         setLoginStatus(false);
        //     });
    }

    return (
        <Page>
            <Title>MyWallet</Title>
            <InputsLogin onSubmit={sendRequest}>
                <input
                    placeholder="Nome"
                    type="text"
                    name="name"
                    value={signData.name}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={signData.email}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    data-test="password-input"
                    placeholder="Senha"
                    type="password"
                    name="password"
                    value={signData.password}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    placeholder="Confirme a senha"
                    data-test="password-input"
                    type="password"
                    name="confirmPassword"
                    value={signData.confirmPassword}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <button disabled={loginStatus} type="submit">
                    {(!loginStatus) ? "Cadastrar" :
                        <ThreeDots
                            height="45"
                            width="45"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />}
                </button>
            </InputsLogin>
            <Link to="/">
                <SignIn>Já tem uma conta? Entre agora!</SignIn>
            </Link>
        </Page>
    );
}

export default SignInPage;