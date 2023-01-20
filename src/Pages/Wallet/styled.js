import styled from "styled-components";

export const Page = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    background: #8C11BE;
    a {
        margin-top: 50px;
        text-decoration: none;
    }
`;
export const Header = styled.div`
    width: 90%;
    height: 10%;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const WalletCard = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 70%;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4%;
`;
export const List = styled.ul`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: ${props => props.list === 0 ? "20px" : "16px"};
    line-height: ${props => props.list === 0 ? "23px" : "19px"};
    justify-content: ${props => props.list === 0 ? "center" : ""};
    align-items: ${props => props.list === 0 ? "center" : ""};
    text-align: ${props => props.list === 0 ? "center" : ""};
    color: ${props => props.list === 0 ? "#868686" : ""};
    li{
        margin-bottom: 10px;
    }
`;
export const Item = styled.li`
    box-sizing:border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
    p{
        color: #C6C6C6;
        text-align: start;
        width: 25%;
    }
    h3{
        width: 75%;
        text-align: start;
    }
    h4{
        width: 20%;
        text-align: end;
        color: ${props => (props.type === "in") ? "#03AC00" : "#C70000"};
    }
`;
export const Total = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    p{
        color: ${props => (props.total >= 0) ? "#03AC00" : "#C70000"};
        font-weight: 400;
    }
`;
export const Footer = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const FooterButton = styled.button`
    box-sizing: border-box;
    max-width: 250px;
    width: 48%;
    height: 85%;
    background-color: #A328D6;
    border: 2px #A328D6;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
    font-family: 'Raleway', sans-serif;
    font-size: 25px;
    padding: 15px;
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
`;