import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`

const SearchWrapper = styled.div`
    width: 100%;
    min-height: 60vh;
`

const Form = styled.form`
    width: 80%;
    margin: 40px auto;
    display: flex;
    justify-content: center;
`

const Input = styled.input`
    padding: 0.4rem;
    margin-right: 8px;
    border: 1px solid #070952;
`

const Button = styled.button`
    padding: 0.4rem 1rem;
    background: #070952;
    color: #fff;
    border: none;
`

const ListWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    color: #070952;
    text-align: center;
`

const Data = styled.div`
    margin: 8px 0;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export interface Drink {
    idDrink: number,
    strDrink: string,
    strDrinkThumb: string,
    strAlcoholic: string,
    onClick(category: string, id: number): void
}

const Home = () => {

    const [word, setWord] = useState<string>('')
    const [list, setList] = useState<Drink[]>()

    const router = useRouter()

    const onClick = (category: string, id: number) => {
        router.push(`categories/${category}/${id}`)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: {value} } = e
        setWord(value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`)
        .then(res => {
            // console.log(res.data)
            setList(res.data.drinks)
        })
        .catch(err => console.log(err))
        setWord('')
    }

    return (
    <Container>
        <SearchWrapper>
            <Form onSubmit={onSubmit}>
                <Input type='text' placeholder='Cocktail Name' maxLength={40} value={word} onChange={onChange} />
                <Button>search</Button>
            </Form>
            <ListWrapper>
                {
                    list &&
                    list.map((item: Drink) => (
                        <Data key={item.idDrink} onClick={() => onClick(item.strAlcoholic, item.idDrink)}>{item.strDrink}</Data>
                    ))
                }
            </ListWrapper>
        </SearchWrapper>
    </Container>
    )
}

export default Home
