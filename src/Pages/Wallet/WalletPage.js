/* eslint-disable react-hooks/exhaustive-deps */
import { RxExit } from "react-icons/rx";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Page, Header, WalletCard, Footer, FooterButton, List, Item, Total } from "./styled";
import { useContext, useEffect, useState } from "react";
import Context from "../../components/Context/Context";
import axios from "axios";
import PageLoad from "../../components/PageLoad/PageLoad";
import { useNavigate } from "react-router-dom";


const Wallet = () => {
    const { resLogin, setResLogin } = useContext(Context);
    const [user, setUser] = useState(undefined);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const floatNumCase = 2;

    useEffect(() => {
        axios.get(`http://localhost:5000/wallet`, {
            headers: {
                Authorization: `Bearer ${resLogin}`
            }
        })
            .then((res) => {
                setUser(res.data);
                let sum = 0;
                res.data.wallet.map(e => {
                    if (e.type === "in") {
                        return sum += e.value;
                    } else {
                        return sum -= e.value;
                    }
                });
                setTotal(sum);
            })
            .catch((err) => {
                alert(err.response.data);
                navigate("/");
            });
    }, []);

    function Logout() {
        localStorage.removeItem("token");
        setResLogin(null);
        navigate("/");
    }

    if (user === undefined) {
        return <PageLoad />
    }

    return (
        <Page>
            <Header>
                <h1>Olá, {user.name}</h1>
                <RxExit onClick={Logout} />
            </Header>
            <WalletCard>
                <List list={user.wallet.length}>
                    {(user.wallet.length > 0) ? user.wallet.map((e, i) => {
                        return (
                            <Item key={i} type={e.type}>
                                <div>
                                    <p>{e.date}</p>
                                    <h3>{e.text}</h3>
                                </div>
                                <h4>{e.value.toFixed(floatNumCase).replace(".", ",")}</h4>
                            </Item>
                        )
                    }) : <>Não há registros<br /> de entrada ou saída</>}
                </List>
                {
                    (user.wallet.length > 0) ?
                        <Total total={total}>
                            <h3>SALDO:</h3>
                            <p>{total.toFixed(floatNumCase)}</p>
                        </Total>
                        : <></>
                }
            </WalletCard>
            <Footer>
                <FooterButton onClick={() => navigate("/nova-entrada")}>
                    <AiOutlinePlusCircle />
                    <p>Nova<br /> entrada</p>
                </FooterButton>
                <FooterButton onClick={() => navigate("/nova-saida")}>
                    <AiOutlineMinusCircle />
                    <p>Nova<br /> saida</p>
                </FooterButton>
            </Footer>
        </Page>
    );
}

export default Wallet;