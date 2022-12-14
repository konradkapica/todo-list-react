import { StyledSection, Title, Header } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </Header>
        <div>
            {body}
        </div>
    </StyledSection>
);

export default Section;