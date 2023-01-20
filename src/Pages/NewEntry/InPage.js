import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Context from "../../components/Context/Context";
import { Page, Title, Inputs } from "./styled"

const InPage = () => {
    const { resLogin, setResLogin } = useContext(Context);

    const [entry, setEntry] = useState({
        type: "in",
        value: "",
        text: ""
    });
    const [entryStatus, setEntryStatus] = useState(false);
    const navigate = useNavigate();

    const sendRequest = (e) => {
        e.preventDefault();
        setEntryStatus(true);
        axios.post(`${process.env.REACT_APP_API_URL}/wallet`, entry, {
            headers: {
                Authorization: `Bearer ${resLogin}`
            }
        })
            .then(() => {
                setEntryStatus(false);
                navigate("/home");
            })
            .catch((err) => {
                alert(err.response.data);
                setEntryStatus(false);
                Logout();
            });
    }

    function Logout() {
        localStorage.removeItem("token");
        setResLogin(null);
        navigate("/");
    }

    function handleInput(e) {
        setEntry({ ...entry, [e.target.name]: e.target.value });
    }

    return (
        <Page>
            <Title>Nova entrada</Title>
            <Inputs onSubmit={sendRequest}>
                <input
                    type="number"
                    step="0.01"
                    placeholder="Valor"
                    name="value"
                    value={entry.value}
                    onChange={handleInput}
                    disabled={entryStatus}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="text"
                    value={entry.text}
                    onChange={handleInput}
                    disabled={entryStatus}
                    required
                />
                <button
                    disabled={entryStatus}
                    type="submit"
                >
                    {(!entryStatus) ? "Salvar entrada" :
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
            </Inputs>
        </Page>
    );
}

export default InPage;