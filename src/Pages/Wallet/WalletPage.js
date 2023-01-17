import { RxExit } from "react-icons/rx";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Page, Header, WalletCard, Footer, FooterButton, List, Item, Total } from "./styled";

const Wallet = () => {
    return (
        <Page>
            <Header>
                <h1>Olá, Fulano</h1>
                <RxExit />
            </Header>
            <WalletCard>
                <List>
                    <Item>
                        <p>30/11</p>
                        <h3>Almoço</h3>
                        <h4>39,00</h4>
                    </Item>
                    <Item>
                        <p>30/11</p>
                        <h3>Almoço</h3>
                        <h4>39,00</h4>
                    </Item>
                    <Item>
                        <p>30/11</p>
                        <h3>Almoço</h3>
                        <h4>39,00</h4>
                    </Item>
                    <Item>
                        <p>30/11</p>
                        <h3>Almoço</h3>
                        <h4>39,00</h4>
                    </Item>
                </List>
                <Total>
                    <h3>SALDO:</h3>
                    <p>100,00</p>
                </Total>
            </WalletCard>
            <Footer>
                <FooterButton>
                    <AiOutlinePlusCircle />
                    <p>Nova<br /> entrada</p>
                </FooterButton>
                <FooterButton>
                    <AiOutlineMinusCircle />
                    <p>Nova<br /> saida</p>
                </FooterButton>
            </Footer>
        </Page>
    );
}

export default Wallet;