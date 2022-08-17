import styled from "styled-components"

const FooterContainer = styled.footer`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
`

export default function Footer() {
    return (
        <FooterContainer>
            <p>© 2022 TheCocktailDB.</p>
        </FooterContainer>
    )
}