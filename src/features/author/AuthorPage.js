import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper, Paragraph } from "./styled";

function AuthorPage() {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Konrad Kapica"
                body={
                    <Wrapper>
                        <Paragraph>
                            <strong>Moją pasją jest muzyka.</strong> Od 6 roku życia zajmuję się nią codziennie. Gram na instrumentach perkusyjnych od 15 lat. Interesuje mnie głównie <i>jazz, funky i czasem pop.</i> Grając z orkiestrą zwiedziłem kilka kontynentów, co jeszcze bardziej motywuje mnie do pogłębiania pasji 🏝️
                        </Paragraph>
                        <Paragraph>
                            Poza muzyką jestem również <strong>aktorem i fotografem.</strong> <em>Sztuka</em> znaczy dla mnie o wiele więcej niż można przypuszczać! 🚀
                        </Paragraph>
                    </Wrapper>
                }
            />
        </Container>
    );
};

export default AuthorPage;