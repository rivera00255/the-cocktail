import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useRouter } from "next/router"

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    min-height: 60vh;
`

const Wrapper = styled.div`
    width: 90%;
    margin: 80px auto;
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    width: 200px;
    height: 200px;
    background: #F95700;
    color: #FFF;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 80px;
    box-shadow: 4px 4px 5px #cfcfcf;
    cursor: pointer;
    &:hover {
        background: linear-gradient(140deg, #F95700 25%, #fff);
        box-shadow: none;
    }
`

const Categories = () => {

    const router = useRouter()

    const [category, setCategory] = useState<any[]>([])

    const onClick = (category: string) => {
        router.push(`${router.pathname}/${category.replace(' ', '_')}`)
    }

    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
        .then(res => {
            // console.log(res.data)
            setCategory(res.data.drinks)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Wrapper>
                {
                    category &&
                    category.map((item: {strAlcoholic: string}) => (
                        <Card key={item.strAlcoholic} onClick={() => onClick(item.strAlcoholic)}>
                            {item.strAlcoholic}
                        </Card>
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default Categories