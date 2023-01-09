import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "./styled";

function AuthorPage() {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Konrad Kapica"
                body={
                    <Wrapper>
                        <p>nanan</p>
                    </Wrapper>
                }
            />
        </Container>
    );
};

export default AuthorPage;