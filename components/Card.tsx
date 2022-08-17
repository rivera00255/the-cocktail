import { useRouter } from "next/router"
import styled from "styled-components"
// import { Drink } from "../pages"

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

const DrinkCard = styled.div`
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

const Card = ({item} : any) => {

    const router = useRouter()

    const onClick = (category: string, id: number) => {
        router.push(`categories/${category}/${id}`)
    }

    return (
        <DrinkCard key={item.idDrink} onClick={() => onClick(item.strAlcoholic, item.idDrink)}>
            <img src={item.strDrinkThumb} alt={item.strDrink} />
            <Cover>{item.strDrink}</Cover>
        </DrinkCard>
    )
}

export default Card