import styled from "styled-components";

export const Page = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #8C11BE;
`;
export const Title = styled.h1`
    width: 90%;
    margin: 30px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`;
export const Inputs = styled.form`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    *{
        font-family: 'Raleway', sans-serif;
        font-size: 21px;
        line-height: 26px;
        font-weight: 400;
    }
    input{
        box-sizing: border-box;
        margin: 5px 0;
        width: 90%;
        height: 45px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        background: #FFFFFF;
        &:disabled{
            background: #F2F2F2;
        }
        &::placeholder{
            color: #000000;
        }
    }
    button{
        width: 90%;
        height: 45px;
        background: #A328D6;
        border-radius: 5px;
        border: 2px #A328D6;
        margin: 5px;
        text-align: center;
        color: #FFFFFF;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        &:disabled{
            opacity: 0.7;
        }
    }
`;