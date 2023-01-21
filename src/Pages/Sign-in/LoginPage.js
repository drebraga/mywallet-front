/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../components/Context/Context";
import { Page, Title, InputsLogin, SignIn } from "./styled";
import axios from "axios";

const LoginPage = () => {
    const { resLogin, setResLogin } = useContext(Context);
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(false);
    const [loginData, setLoginData] = useState({
        password: "",
        email: ""
    });

    useEffect(() => {
        if (resLogin !== null) {
            setLoginStatus(true);
            axios.post(`${process.env.REACT_APP_API_URL}/signin`, {
                headers: {
                    Authorization: `Bearer ${resLogin}`
                }
            })
                .then((res) => {
                    setLoginStatus(false);
                    setResLogin(res.data);
                    localStorage.setItem("token", JSON.stringify(res.data));
                    navigate("/home");
                })
                .catch((err) => {
                    alert(err.response.data);
                    setLoginStatus(false);
                });
            navigate("/home");
        }
    }, []);

    function handleInput(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function sendRequest(e) {
        e.preventDefault();
        setLoginStatus(true);
        axios.post(`${process.env.REACT_APP_API_URL}/signin`, loginData)
            .then((res) => {
                setLoginStatus(false);
                setResLogin(res.data);
                localStorage.setItem("token", JSON.stringify(res.data));
                navigate("/home");
            })
            .catch((err) => {
                alert(err.response.data);
                setLoginStatus(false);
            });
    }

    return (
        <Page>
            <Title>MyWallet</Title>
            <InputsLogin onSubmit={sendRequest}>
                <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <button disabled={loginStatus} type="submit">
                    {(!loginStatus) ? "Entrar" :
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
            <Link to="/cadastro">
                <SignIn>Primeira vez? Cadastre-se!</SignIn>
            </Link>
        </Page>
    );
}

export default LoginPage;