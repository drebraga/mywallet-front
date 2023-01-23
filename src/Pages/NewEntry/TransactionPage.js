/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../../components/Context/Context";
import { Page, Title, Inputs } from "./styled"

const TransactionPage = () => {

    const { route, id } = useParams();
    const { resLogin, setResLogin } = useContext(Context);
    const [routeType, entryType] = route.split("-");
    const [entryStatus, setEntryStatus] = useState(false);
    const navigate = useNavigate();

    const [entry, setEntry] = useState({
        value: "",
        text: ""
    });

    const sendEditRequest = (e) => {
        e.preventDefault();
        setEntryStatus(true);
        const request = { ...entry, _id: id };
        axios.put(`${process.env.REACT_APP_API_URL}/wallet`, request, {
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

    const sendRequest = (e) => {
        e.preventDefault();
        setEntryStatus(true);
        const type = entryType === "entrada" ? "in" : "out";
        const request = { ...entry, type: type };
        axios.post(`${process.env.REACT_APP_API_URL}/wallet`, request, {
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

    const Logout = () => {
        localStorage.removeItem("token");
        setResLogin(null);
        navigate("/");
    }

    const handleInput = (e) => {
        setEntry({ ...entry, [e.target.name]: e.target.value });
    }

    const getTransaction = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/wallet/${id}`, {
            headers: {
                Authorization: `Bearer ${resLogin}`
            }
        })
            .then((res) => {
                const transaction = res.data.filter(e => e._id === id);
                setEntry({
                    value: transaction[0].value,
                    text: transaction[0].text
                })
            })
            .catch((err) => {
                alert(err.response.data);
                Logout();
            });
    }
    useEffect(() => {
        if (id) getTransaction();
    }, [])

    return (
        <Page>
            <Title>{routeType === "nova" ? "Nova" : "Editar"} {entryType}</Title>
            <Inputs onSubmit={routeType === "nova" ? sendRequest : sendEditRequest}>
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
                    {(!entryStatus) ? `${routeType === "nova" ? "Salvar" : "Atualizar"} ${entryType}` :
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

export default TransactionPage;