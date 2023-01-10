import { StyledSection, Title, Header, StyledBody } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </Header>
        <StyledBody>
        {body}
        </StyledBody>  
    </StyledSection>
);

export default Section;