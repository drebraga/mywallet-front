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
    font-size: 16px;
    line-height: 19px;
    li{
        margin-bottom: 10px;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        color: #C6C6C6;
    }
    h3{
        width: 65%;
    }
    h4{
        color: green;
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
    padding: 20px;
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
`;