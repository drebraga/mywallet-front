import { Page, Title, Inputs } from "./styled"

const ValuePage = () => {
    return (
        <Page>
            <Title>Nova entrada</Title>
            <Inputs>
                <input type="text" placeholder="Valor" />
                <input type="text" placeholder="Descrição" />
                <button>Salvar entrada</button>
            </Inputs>
        </Page>
    );
}

export default ValuePage;