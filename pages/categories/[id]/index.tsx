import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Drink } from "../pages"

const Container = styled.div`
    width: 1200px;
    margin: 80px auto;
`

const Title = styled.h2`
    text-align: center;
    margin: 40px 0;
    color: #070952;
`

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`
const Cover = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`

const Card = styled.div`
    width: 200px;
    height: 200px;
    color: #FFF;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 50%;
    margin: 16px 32px;
    box-shadow: 4px 4px 5px #cfcfcf;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
    &:hover {
        box-shadow: none;
    }
    &:hover ${Cover} {
        background: linear-gradient(140deg, rgb(249, 87, 0, 0.7) 15%, #fff);
    }
`

const Detail = () => {

    // interface Drink {
    //     idDrink: number,
    //     strDrink: string,
    //     strDrinkThumb: string
    // }

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [drink, setDrink] = useState<Drink[]>()

    const onClick = (idDrink: number) => {
        router.push(`${router.query.id}/${idDrink}`)
    }

    useEffect(() => {
        let str: string = `${router.query.id}`
        setTitle(str.replace('_', ' '))
    }, [])

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${router.query.id}`)
        .then(res => {
            // console.log(res.data)
            setDrink(res.data.drinks)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Title>{title}</Title>
            <Wrapper>
                {
                    drink &&
                    drink.map((item: Drink) => (
                        <Card key={item.idDrink} onClick={() => onClick(item.idDrink)}>
                            <img src={item.strDrinkThumb} alt={item.strDrink} />
                            <Cover>{item.strDrink}</Cover>
                        </Card>
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default Detail