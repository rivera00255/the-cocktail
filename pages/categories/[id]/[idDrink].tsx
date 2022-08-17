import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
`

const Title = styled.h3`
    text-align: center;
    margin: 40px 0;
    color: #070952;
`

const Content = styled.div`
    width: 400px;
    margin: 0 auto;
`

const Wrapper = styled.div`
    width: 100%;
    margin: 40px 0;
`

const ContentWrapper = styled(Wrapper)`
    display: flex;
    justify-content: center;
`

const Img = styled.img`
    max-width: 400px;
    height: auto;
`

const TagWrapper = styled(Wrapper)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Tag = styled.div`
    font-size: 0.9rem;
    color: #070952;
    border: 1px solid #070952;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    margin: 4px;
`

const SubTitle = styled.h4`
    margin: 24px 0 8px 0;
`

const Desc = styled.div``

const Detail = () => {

    interface Drink {
        // strDrink: string,
        // strCategory: string,
        // strGlass: string,
        // strDrinkThumb: string,
        // strInstructions: string,
        // strIngredient?: string[]
        [key: string]: string
    }

    const router = useRouter()
    // console.log(router.query.idDrink)

    const [detail, setDetail] = useState<{[key: string]: string}>({})
    const [ingredient, setIngredient] = useState<string[]>([])

    const getIngredient = (obj: {[key: string]: string}) => {
        for(let i in obj) {
            if(i.includes('strIngredient')) {
                if(obj[i] !== null) {
                    // console.log(obj[i])
                    setIngredient(prev => [...prev, obj[i]])
                }
            }
        }
    }

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${router.query.idDrink}`)
        .then(res => {
            // console.log(res.data)
            setDetail(res.data.drinks[0])
            getIngredient(res.data.drinks[0])
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Title>{detail.strDrink}</Title>
            <Content>
                <ContentWrapper>
                    <Img src={detail.strDrinkThumb} alt={detail.strDrink} />
                </ContentWrapper>
                <TagWrapper>
                    <Tag>Category : {detail.strCategory}</Tag>
                    <Tag>Glass : {detail.strGlass}</Tag>
                </TagWrapper>
                <Wrapper>
                    <SubTitle>Ingredient</SubTitle>
                    <Desc>
                        {
                            ingredient &&
                            ingredient.map(item => (
                                <p key={item}>{item}</p>
                            ))
                        }
                    </Desc>
                    <SubTitle>Instruntion</SubTitle>
                    <Desc>{detail.strInstructions}</Desc>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Detail