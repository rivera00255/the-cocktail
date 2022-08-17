import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

const HeaderContainer = styled.header`
    width: 100%;
`
const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`

const Logo = styled.h1`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Nav = styled.nav`
    width: 100%;
    height: 40px;
    color: #070952;
    font-weight: bold;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

export default function Header() {

    const router = useRouter()

    return (
        <HeaderContainer>
            <Container>
                <Logo>
                    <Link href='/'>
                        <a>
                            <Image src="https://cdn-icons-png.flaticon.com/512/3126/3126698.png" alt="logo" width={80} height={80} />
                        </a>
                    </Link>
                </Logo>
                <Nav>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Search by name</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/categories'>
                                <a>Cocktail</a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href='/random'>
                                <a>Random Picker</a>
                            </Link>
                        </li> */}
                    </ul>
                </Nav>
            </Container>
        </HeaderContainer>
    )
}